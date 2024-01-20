import { ls } from "@/src/lib/lemon";
import { getCurrentUser } from "@/src/lib/session";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const user = await getCurrentUser()

        const variantId = process.env.LEMONS_SQUEEZY_PRODUCT_VARIANT_ID

        if (!user) return NextResponse.json({ message: "No user found" }, { status: 404 });

        const attributes = {
            'checkout_options': {
                'embed': true,
                'media': false,
                'button_color': '#fde68a'
            },
            'checkout_data': {
                'email': user.email,
                'custom': {
                    'user_id': user.id
                }
            },
            'product_options': {
                'enabled_variants': [variantId],
                'redirect_url': `${process.env.NEXT_PUBLIC_APP_URL}/`,
                'receipt_link_url': `${process.env.NEXT_PUBLIC_APP_URL}/`,
                'receipt_button_text': 'Go to your account',
                'receipt_thank_you_note': "Thank you for your purchase! You'll receive an email with your receipt shortly."
            }
        }

        const checkout = await ls.createCheckout({
            storeId: Number(process.env.LEMON_SQUEEZY_STORE_ID)!,
            variantId: Number(variantId),
            attributes
        })

        return NextResponse.json({ 'error': false, 'url': checkout['data']['attributes']['url'] }, { status: 200 })
    } catch (err: any) {
        return NextResponse.json({ message: err.message || err }, { status: 500 });
    }
}