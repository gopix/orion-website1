import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://orionbitssystems.com";

  // Core routes covering home, about, solutions, services, case studies, and contact-us
  const routes = [
    "",
    "/solutions/CRM",
    "/solutions/publishing",
    "/services/ai-system-dev",
    "/insights/case-studies",
    "/contact-us",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
