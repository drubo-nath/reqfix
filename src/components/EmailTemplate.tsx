import * as React from "react";

interface EmailTemplateProps {
  url: string;
}

const sans = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const serif = 'Georgia, "Times New Roman", serif';
const mono = '"Courier New", Courier, monospace';


export function EmailTemplate({ url }: EmailTemplateProps) {
  return (
    /* ── Page wrapper ── */
    <div
      style={{
        fontFamily: sans,
        backgroundColor: "#0c1a16",
        backgroundImage:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(3,79,70,0.28) 0%, transparent 100%)",
        padding: "40px 20px",
        margin: 0,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      {/* ── Card ── */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow:
            "0 0 0 1px rgba(3,79,70,0.35), 0 32px 80px rgba(0,0,0,0.55), 0 8px 30px rgba(3,79,70,0.25)",
        }}
      >

        {/* ════════════════════════════════
            HERO STRIP — dark editorial
        ════════════════════════════════ */}
        <div
          style={{
            backgroundColor: "#080f0d",
            backgroundImage:
              "radial-gradient(ellipse 90% 70% at 50% -10%, rgba(3,79,70,0.50) 0%, transparent 100%)",
            padding: "30px 40px 26px",
            textAlign: "center",
          }}
        >
          {/* Logo + wordmark row */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              marginBottom: "22px",
            }}
          >
            <img
              src="https://www.reqfix.com/reqFix.svg"
              alt="ReqFix"
              style={{ width: "26px", height: "26px" }}
            />
            <span
              style={{
                fontFamily: serif,
                fontSize: "18px",
                fontWeight: "700",
                letterSpacing: "0.06em",
                color: "#ffffff",
                marginTop: "2px",
                marginLeft: "4px",
              }}
            >
              ReqFix
            </span>
          </div>

          {/* Thin rule under logo */}
          <div
            style={{
              width: "36px",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(3,79,70,0.7), transparent)",
              margin: "0 auto 22px",
            }}
          />

          {/* Headline — tighter, single-concept */}
          <h1
            style={{
              fontFamily: serif,
              fontSize: "34px",
              fontWeight: "400",
              lineHeight: "1.2",
              letterSpacing: "-0.6px",
              color: "#f5f5f0",
              margin: "0 0 14px",
            }}
          >
            Welcome to the{" "}
            <em style={{ color: "#5edfb0", fontStyle: "italic", fontWeight: "300" }}>
              future
            </em>{" "}
            of property ops.
          </h1>

          {/* Sub-label */}
          <p
            style={{
              fontFamily: sans,
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.30)",
              margin: "0",
            }}
          >
            One verification away from your spot
          </p>
        </div>

        {/* Gradient accent divider */}
        <div
          style={{
            height: "2px",
            background:
              "linear-gradient(90deg, #034f46 0%, #5edfb0 50%, #034f46 100%)",
          }}
        />

        {/* ════════════════════════════════
            BODY — warm cream
        ════════════════════════════════ */}
        <div
          style={{
            backgroundColor: "#fbfbe7",
            padding: "40px 44px 36px",
          }}
        >
          {/* Section eyebrow */}
          <p
            style={{
              fontFamily: sans,
              fontSize: "10px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#034f46",
              fontWeight: "700",
              margin: "0 0 10px",
              textAlign: "center",
            }}
          >
            Action required
          </p>

          {/* Sub-headline */}
          <h2
            style={{
              fontFamily: serif,
              fontSize: "28px",
              fontWeight: "600",
              color: "#0a0a0a",
              letterSpacing: "-0.4px",
              margin: "0 0 20px",
              textAlign: "center",
            }}
          >
            Verify your email address
          </h2>

          {/* Body copy */}
          <p
            style={{
              fontFamily: sans,
              fontSize: "15px",
              lineHeight: "1.8",
              color: "#3a3a3a",
              margin: "0 0 36px",
              textAlign: "center",
            }}
          >
            Thank you for joining the{" "}
            <strong style={{ color: "#034f46" }}>ReqFix</strong> waitlist. We&apos;re
            building the operating system for modern property management — smart,
            seamless, and built for teams who move fast. Click below to secure
            your spot.
          </p>

          {/* CTA button */}
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#034f46",
                color: "#fbfbe7",
                padding: "17px 40px",
                borderRadius: "100px",
                textDecoration: "none",
                fontFamily: sans,
                fontSize: "15px",
                fontWeight: "600",
                letterSpacing: "0.03em",
                boxShadow:
                  "0 0 0 1px rgba(3,79,70,0.6), 0 6px 28px rgba(3,79,70,0.35)",
              }}
            >
              Verify Email &amp; Claim Your Spot &#8594;
            </a>
          </div>

          {/* Fallback link */}
          <p
            style={{
              fontFamily: sans,
              fontSize: "11px",
              color: "#999",
              textAlign: "center",
              margin: "0 0 4px",
            }}
          >
            Or copy this link into your browser:
          </p>
          <p
            style={{
              fontFamily: mono,
              fontSize: "11px",
              color: "#034f46",
              wordBreak: "break-all",
              textAlign: "center",
              margin: "0",
              opacity: 0.75,
            }}
          >
            {url}
          </p>

          {/* Ornamental separator */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              margin: "44px 0 36px",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "1px",
                backgroundColor: "rgba(3,79,70,0.15)",
              }}
            />
            <div
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                backgroundColor: "#034f46",
                opacity: 0.4,
              }}
            />
            <div
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                backgroundColor: "#034f46",
                opacity: 0.25,
              }}
            />
            <div
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                backgroundColor: "#034f46",
                opacity: 0.4,
              }}
            />
            <div
              style={{
                flex: 1,
                height: "1px",
                backgroundColor: "rgba(3,79,70,0.15)",
              }}
            />
          </div>
        </div>

        {/* ════════════════════════════════
            FOOTER — dark
        ════════════════════════════════ */}
        <div
          style={{
            backgroundColor: "#080f0d",
            borderTop: "1px solid rgba(3,79,70,0.2)",
            padding: "24px 44px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: sans,
              fontSize: "13px",
              color: "rgba(255,255,255,0.35)",
              margin: "0 0 6px",
              lineHeight: "1.6",
            }}
          >
            This link expires in{" "}
            <span style={{ color: "#5edfb0" }}>5 minutes</span>.
          </p>
          <p
            style={{
              fontFamily: sans,
              fontSize: "12px",
              color: "rgba(255,255,255,0.2)",
              margin: "0 0 20px",
              lineHeight: "1.6",
            }}
          >
            If you didn&apos;t request this, you can safely ignore it.
          </p>
          <div
            style={{
              width: "32px",
              height: "1px",
              background: "rgba(3,79,70,0.4)",
              margin: "0 auto 16px",
            }}
          />
          <p
            style={{
              fontFamily: sans,
              fontSize: "11px",
              color: "rgba(255,255,255,0.15)",
              letterSpacing: "0.12em",
              margin: 0,
            }}
          >
            &copy; {new Date().getFullYear()} ReqFix &middot; All rights reserved
          </p>
        </div>

      </div>
    </div>
  );
}