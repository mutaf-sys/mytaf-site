import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/projects", "/masterskaya", "/privacy", "/consent"].map((path) => ({
    url: `${siteConfig.url}${path}`,
  }));

  const products = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
  }));

  return [...pages, ...products];
}
