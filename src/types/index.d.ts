import { User } from "@prisma/client";

export type UserSubscriptionPlan = Pick<
    User,
    | "stripeCustomerId"
    | "stripeSubscriptionId"
    | "stripePriceId"
    | "stripeCurrentPeriodEnd"
> & {
    isPro: boolean;
};