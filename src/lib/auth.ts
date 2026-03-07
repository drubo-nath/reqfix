import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { magicLink } from "better-auth/plugins";
import { db } from "@/db";
import * as schema from "@/db/schema";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);


export const auth = betterAuth({
    database: drizzleAdapter(db, { provider: "pg", schema }),
    plugins: [
        magicLink({
            sendMagicLink: async ({ email, token, url }) => {
                try {
                    await resend.emails.send({
                        from: "ReqFix <no-reply@contact.reqfix.com>",
                        to: [email],
                        subject: "Verify your email for ReqFix Waitlist",
                        react: EmailTemplate({ url }),
                    })
                } catch (error) {
                    console.error("Failed to send magic link:", error);
                }
            }
        })
    ]
   
    });