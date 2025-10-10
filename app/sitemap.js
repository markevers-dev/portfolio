import { portfolioItems } from "config/portfolioItems";

const baseUrl = "https://markevers.vercel.app";

const portfolioSitemap = () =>
  Object.keys(portfolioItems).map((item) => {
    const url = `${baseUrl}/nl/portfolio/${item.slug}/`;
    const lastModified = Date.now();
    const priority = 0.6;
    const alternates = {
      languages: {
        en: `${baseUrl}/en/portfolio/${item.slug}/`,
      },
    };
    return { url, priority, lastModified, alternates };
  });

const sitemap = () => {
  return [
    {
      url: `${baseUrl}/nl/`,
      lastModified: "2025-10-03",
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}/en/`,
        },
      },
    },
    {
      url: `${baseUrl}/nl/resume/`,
      lastModified: "2025-10-03",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en/resume/`,
        },
      },
    },
    {
      url: `${baseUrl}/nl/portfolio/`,
      lastModified: "2025-10-03",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en/portfolio/`,
        },
      },
    },
    ...portfolioSitemap(),
  ];
};

export default sitemap;
