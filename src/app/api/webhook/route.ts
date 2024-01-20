import { headers } from "next/headers";
import Stripe from "stripe";

import { NextResponse } from "next/server";
import { stripe } from "@/src/lib/stripe";
import { prisma } from "@/src/lib/prisma";

export async function POST(req: Request) {
    const body = await req.text();
    const signature = headers().get("Stripe-Signature") as string;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!,
        );
    } catch (err: any) {
        return new NextResponse("WEBHOOK ERROR:" + err.message, { status: 400 });
    }

    const session = event.data.object as Stripe.Checkout.Session;

    if (event.type === "checkout.session.completed") {
        const subscription = await stripe.subscriptions.retrieve(
            session.subscription as string,
        );

        if (!session?.metadata?.userId) {
            return new NextResponse("No user id in session", { status: 400 });
        }

        await prisma.user.update({
            where: {
                id: session?.metadata?.userId,
            },
            data: {
                stripeSubscriptionId: subscription.id,
                stripeCustomerId: subscription.customer as string,
                stripePriceId: subscription.items.data[0].price.id,
                stripeCurrentPeriodEnd: new Date(
                    subscription.current_period_end * 1000,
                ),
            },
        });
    }

    if (event.type === "invoice.payment_succeeded") {
        const subscription = await stripe.subscriptions.retrieve(
            session.subscription as string,
        );

        await prisma.user.update({
            where: {
                stripeSubscriptionId: subscription.id,
            },
            data: {
                stripePriceId: subscription.items.data[0].price.id,
                stripeCurrentPeriodEnd: new Date(
                    subscription.current_period_end * 1000,
                ),
            },
        });
    }
    return new NextResponse(null, { status: 200 });
}