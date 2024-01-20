import { NextResponse } from "next/server";

import { absoluteUrl } from "@/src/utils";
import { stripe } from "@/src/lib/stripe";
import { getCurrentUser } from "@/src/lib/session";
import { getUserSubscription } from "@/src/lib/subscription";

const billingUrl = absoluteUrl("/");

export async function GET(req: Request) {
    const priceId = req.headers.get("priceId");

    try {
        const user = await getCurrentUser();

        if (!user || !user.email) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        // comment out following two lines for one time payments

        const subscriptionPlan = await getUserSubscription(user.id);

        if (subscriptionPlan instanceof Error) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        // User on Pro Plan
        if (subscriptionPlan.isPro && subscriptionPlan.stripeCustomerId) {
            const stripeSession = await stripe.billingPortal.sessions.create({
                customer: subscriptionPlan.stripeCustomerId,
                return_url: billingUrl,
            });

            return new Response(JSON.stringify({ url: stripeSession.url }));
        }

        // User on Free Plan so create checkout session
        const stripeSession = await stripe.checkout.sessions.create({
            success_url: billingUrl,
            cancel_url: billingUrl,
            payment_method_types: ["card"],
            // change mode to payment for one time payments
            mode: "subscription",
            billing_address_collection: "auto",
            customer_email: user.email,
            line_items: [
                {
                    price: priceId!,
                    quantity: 1,
                },
            ],
            // remove this in one time payments
            metadata: {
                userId: user.id,
            },
        });

        return new Response(JSON.stringify({ url: stripeSession.url }));
    } catch (e: any) {
        return new NextResponse(e, { status: 500 });
    }
}
