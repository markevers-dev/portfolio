import { portfolioItems } from "config/portfolioItems";
import { PortfolioItemCard } from "components";

const Portfolio = async ({ params }) => {
  const { lang } = await params;

  return (
    <div className="mx-12 my-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {portfolioItems.map((item) => (
        <PortfolioItemCard key={item.slug} lang={lang} itemData={item} />
      ))}
    </div>
  );
};

export default Portfolio;
