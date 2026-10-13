import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Iskalniki in AI iskalniki so izrecno dobrodošli: želimo, da nas navajajo.
export default function robots(): MetadataRoute.Robots {
  const aiBots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-User", "PerplexityBot", "Google-Extended", "Applebot-Extended"];
  return {
    rules: [{ userAgent: "*", allow: "/" }, ...aiBots.map((userAgent) => ({ userAgent, allow: "/" }))],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
