const robots = () => {
  return {
    rules: {
      userAgent: "*",
      allow: ["/en/", "/nl/"],
      crawlDelay: 2,
    },
    sitemap: "https://portfolio/sitemap.xml",
  };
};

export default robots;
