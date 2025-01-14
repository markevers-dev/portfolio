import { montserrat } from "public/fonts/fonts";
import clsx from "clsx";
import Link from "next/link";
import { Icon } from "components/core/icon/icon";

const Home = async ({ params }) => {
  const { lang } = await params;

  return (
    <div className="flex max-w-2xl flex-col space-y-4">
      <div>
        This will eventually be filled with content. Also: internationalization
        has not been implemented yet, so I'm sorry for the translation icon
        bamboozle!
      </div>
      <div>
        This website is being developed using{" "}
        <span
          className={clsx("font-bold tracking-wider", montserrat.className)}
        >
          Next.js
        </span>{" "}
        &{" "}
        <span
          className={clsx("font-bold tracking-wider", montserrat.className)}
        >
          Tailwind CSS
        </span>{" "}
        and being hosted on{" "}
        <span
          className={clsx("font-bold tracking-wider", montserrat.className)}
        >
          Vercel
        </span>
        ! These tools happen to be what I'm currently specialized in, so if
        you're interested in contacting me, take a look at the socials at the
        bottom of the page!
      </div>
      <div>
        If you want to see the code for this website, you can find it on{" "}
        <Link
          href="https://github.com/markevers-dev/portfolio"
          target="_blank"
          className={clsx(
            "flex flex-row items-center space-x-2 font-bold tracking-wider",
            montserrat.className,
          )}
        >
          GitHub <Icon name="GitBranch" size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
