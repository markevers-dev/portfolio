import Link from "next/link";
import { Icon } from "components";
import { translations } from "config/translations";
import { montserrat } from "public/fonts/fonts";
import clsx from "clsx";

export const PortfolioItemCard = async ({ lang, itemData }) => {
  const {
    title,
    cardHeroColour,
    description,
    slug,
    technologies,
    github,
    type,
  } = itemData;
  const text = translations.portfolioPage.card;

  return (
    <Link
      className="flex flex-col rounded-lg shadow-sm transition-colors duration-200 hover:bg-primary-200/35"
      href={`/${lang}/portfolio/${slug}`}
      key={slug}
    >
      <div
        className="flex flex-row items-center justify-between rounded-t-lg px-4 py-2 text-white"
        style={{ backgroundColor: cardHeroColour }}
      >
        <h2 className={clsx(montserrat.className, "text-xl font-semibold")}>
          {title}
        </h2>
        <Icon name="ArrowSquareRight" className="max-md:hidden" size={24} />
        <Icon name="ArrowSquareRight" className="md:hidden" size={20} />
      </div>

      {Array.isArray(technologies) && (
        <div className="border-l-2 border-r-2 border-slate-700/35 py-2 dark:border-slate-300/35">
          <ul
            className={clsx(
              montserrat.className,
              "flex flex-wrap gap-2 px-4 py-2",
            )}
            aria-label={text.technologies_used[lang]}
          >
            {technologies.length > 0 &&
              technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md bg-slate-600/20 px-3 py-1 text-sm font-bold text-primary-800 dark:bg-slate-400/50 dark:text-primary-100"
                >
                  {tech}
                </li>
              ))}
            {type && (
              <li className="rounded-md bg-green-600/20 px-3 py-1 text-sm font-bold text-primary-800 dark:bg-green-400/50 dark:text-primary-100">
                {type[lang]}
              </li>
            )}
            {github.length > 0 && (
              <li className="rounded-md bg-purple-600/20 px-3 py-1 text-sm font-bold text-primary-800 dark:bg-purple-400/50 dark:text-primary-100">
                {text.includes_github_link[lang]}
              </li>
            )}
          </ul>
        </div>
      )}

      <div className="flex flex-grow flex-col rounded-b-lg border-b-2 border-l-2 border-r-2 border-primary-700/35 px-4 pb-4 dark:border-primary-300/35">
        <p className="line-clamp-4 text-gray-700 dark:text-primary-100">
          {description[lang]}
        </p>
      </div>
    </Link>
  );
};
