import { UserSubscriptionPlan } from "@/types";
import { prisma } from "./prisma";

const GRACE_PERIOD_MS = 86_400_000;

export async function getUserSubscription(
    userId: string,
): Promise<UserSubscriptionPlan> {
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            stripeSubscriptionId: true,
            stripeCustomerId: true,
            stripePriceId: true,
            stripeCurrentPeriodEnd: true,
        },
    });

    if (!user) {
        throw new Error("User not found");
    }

    const isPro =
        user.stripePriceId &&
        user.stripeCurrentPeriodEnd?.getTime()! + GRACE_PERIOD_MS > Date.now();

    return {
        ...user,
        isPro: !!isPro,
    };
}
