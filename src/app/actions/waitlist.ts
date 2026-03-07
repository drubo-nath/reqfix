"use server"

import { db } from "@/db";
import { waitlist } from "@/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function joinWaitlist(email: string) {
    try {
        // Basic validation
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            return { success: false, error: "Invalid email address" };
        }

        // Call Better Auth to generate a magic link and create the user automatically.
        // Better Auth will invoke its sendMagicLink callback (which we wired to Resend in auth.ts).
        const result = await auth.api.signInMagicLink({
            body: {
                email,
                callbackURL: '/verify-email',
            },
            
            headers: await headers()
        });

        if (result && 'error' in result && result.error) {
            console.error("BetterAuth magic link error:", result.error);
            return { success: false, error: "Could not send verification email." };
        }

        // (Optional) Track specifically in our waitlist table as well if needed in addition to better-auth's internal `user` table.
        // We can use an upsert/ignore behavior here:
        const existing = await db.query.waitlist.findFirst({
            where: eq(waitlist.email, email),
        });

        if (!existing) {
            await db.insert(waitlist).values({ email });
        }

        return {
            success: true,
            message: "Joined successfully! Please check your email to verify."
        };
    } catch (error) {
        console.error("Waitlist error:", error);
        return { success: false, error: "Something went wrong. Please try again later." };
    }
}
