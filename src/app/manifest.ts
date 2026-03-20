import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ReqFix",
    short_name: "ReqFix",
    description:
      "AI-powered maintenance assistant for landlords to automate triage and vendor dispatch.",
    start_url: "/",
    display: "standalone",
    background_color: "#020808",
    theme_color: "#034f46",
    icons: [
      {
        src: "/reqFix.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
