import * as React from "react";

interface EmailTemplateProps {
  url: string;
}

export function EmailTemplate({ url }: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        backgroundColor: "#fbfbe7", // matches var(--color-background)
        padding: "40px 20px",
        margin: 0,
        color: "#000000", // matches var(--color-black)
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "40px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          textAlign: "center",
          borderTop: "6px solid #034f46", // matches var(--color-primary)
        }}
      >
        {/* Logo Equivalent */}
        <h2
          style={{
            margin: "0 0 24px",
            fontSize: "28px",
            fontWeight: "700",
            color: "#034f46",
            letterSpacing: "-0.5px",
          }}
        >
          ReqFix
        </h2>

        <h1
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#111827",
            marginTop: "0",
            marginBottom: "16px",
          }}
        >
          Verify your email address
        </h1>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "26px",
            color: "#4b5563",
            marginBottom: "32px",
          }}
        >
          Thank you for joining the <strong>ReqFix</strong> waitlist! 
          We're building the operating system for modern property management. 
          Please click the button below to verify your email address and secure your spot on the list.
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#034f46",
            color: "#ffffff",
            padding: "14px 28px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "600",
            boxShadow: "0 2px 4px rgba(3, 79, 70, 0.2)",
          }}
        >
          Verify Email & Join Waitlist
        </a>

        <div
          style={{
            marginTop: "40px",
            paddingTop: "24px",
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: "#9ca3af",
              lineHeight: "22px",
              margin: 0,
            }}
          >
            If you didn't request this email, you can safely ignore it. Your spot on the waitlist will not be confirmed.
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#9ca3af",
              lineHeight: "22px",
              marginTop: "8px",
            }}
          >
            &copy; {new Date().getFullYear()} ReqFix. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}