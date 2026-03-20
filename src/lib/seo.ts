const DEFAULT_SITE_URL = "https://www.reqfix.com";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") || DEFAULT_SITE_URL;

export const siteName = "ReqFix";

export const defaultTitle = "ReqFix | AI Maintenance Assistant for Landlords";

export const defaultDescription =
  "ReqFix helps landlords automate maintenance operations. Tenants message once, AI triages the issue, and the right vendor gets dispatched fast.";

export const defaultKeywords = [
  "property management software",
  "landlord maintenance software",
  "AI maintenance assistant",
  "rental maintenance automation",
  "tenant repair requests",
  "vendor dispatch software",
  "maintenance workflow for landlords",
  "ReqFix",
];

export function getSiteUrlObject() {
  try {
    return new URL(siteUrl);
  } catch {
    return new URL(DEFAULT_SITE_URL);
  }
}
