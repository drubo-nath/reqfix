import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "radial-gradient(circle at 20% 10%, #0a7f73 0%, #034f46 35%, #020808 80%)",
          color: "#fbfbe7",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: 36,
            fontWeight: 700,
            letterSpacing: "0.02em",
          }}
        >
          ReqFix
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: 68, lineHeight: 1.05, fontWeight: 700, maxWidth: "960px" }}>
            Maintenance. Handled by AI.
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.3,
              maxWidth: "980px",
              color: "#d7f6f1",
            }}
          >
            Tenants message once. ReqFix triages requests and dispatches the right vendor fast.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
