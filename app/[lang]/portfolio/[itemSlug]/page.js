import Link from "next/link";
import { portfolioItems } from "config/portfolioItems";
import { notFound } from "next/navigation";
import { Icon } from "components";

export const generateStaticParams = async () => {
  return portfolioItems.map((item) => ({
    itemSlug: item.slug,
  }));
};

export const generateMetadata = async ({ params }) => {
  const { itemSlug } = await params;
  const item = portfolioItems.find((item) => item.slug === itemSlug);

  if (!item) {
    return {
      title: "Item Not Found",
      description: "The requested portfolio item does not exist.",
    };
  }

  return {
    title: item.title,
    description: item.description.en,
  };
};

const PortfolioItem = async ({ params }) => {
  const { lang, itemSlug } = await params;
  const item = portfolioItems.find((item) => item.slug === itemSlug);
  if (!item) notFound();

  const {
    title,
    description,
    image,
    imageAlt,
    link,
    github,
    technologies,
    type,
  } = item;

  return (
    <div className="mx-12 my-6 flex flex-col gap-4">
      <div className="flex flex-col items-start justify-start max-md:space-y-2 md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-bold">{title}</h2>
        <div className="flex flex-row space-x-4">
          {link.length > 0 && (
            <Link
              className="transition-color flex flex-row items-center justify-center rounded-md bg-primary-500 p-2 text-white duration-200 hover:bg-primary-600 active:bg-primary-700"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
              <Icon
                name="ArrowSquareOut"
                className="ml-2 inline-block"
                size={20}
              />
            </Link>
          )}
          {github.length > 0 && (
            <Link
              className="transition-color flex flex-row items-center justify-center rounded-md bg-purple-500 p-2 text-white duration-200 hover:bg-purple-600 active:bg-purple-700"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <Icon name="GithubLogo" className="ml-2 inline-block" size={20} />
            </Link>
          )}
        </div>
      </div>

      <ul className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-md bg-slate-600/20 p-2 font-bold dark:bg-slate-400/50"
          >
            {tech}
          </li>
        ))}
        {type && (
          <li className="rounded-md bg-green-600/20 p-2 font-bold dark:bg-green-400/50">
            {type[lang]}
          </li>
        )}
      </ul>
      <p className="max-w-2xl">{description[lang]}</p>
    </div>
  );
};

export default PortfolioItem;
