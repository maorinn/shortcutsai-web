import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const user = await getCurrentUser()
    const { image } = await req.json()

    if (!user || !user.email) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!image) {
        return new NextResponse("Please Provide Image", { status: 400, statusText: "No image provided" });
    }

    await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            image: image
        }
    })

    return new NextResponse("User updated successfully!", { status: 200, });
}