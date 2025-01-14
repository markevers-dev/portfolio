import { montserrat } from "public/fonts/fonts";
import clsx from "clsx";
import Link from "next/link";

const Home = async ({ params }) => {
  const { lang } = await params;

  return (
    <div className="flex max-w-2xl flex-col space-y-4">
      <div>
        Hey there! My name is Mark Evers and I'm a Web Developer! I'm currently
        studying Web Development at the HAN in Arnhem, The Netherlands and
        working as an Intern Front-end/Back-end Development at Lukkien in Ede,
        The Netherlands!
      </div>
      <div>
        This website is being developed using{" "}
        <span
          className={clsx("font-bold tracking-wider", montserrat.className)}
        >
          Next.js
        </span>
        ,{" "}
        <span
          className={clsx("font-bold tracking-wider", montserrat.className)}
        >
          Tailwind CSS
        </span>{" "}
        &{" "}
        <span
          className={clsx("font-bold tracking-wider", montserrat.className)}
        >
          Headless UI
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
            "hover:text-primary-200 active:text-primary-300 font-bold tracking-wider transition-colors duration-100",
            montserrat.className,
          )}
        >
          GitHub
        </Link>
        .
      </div>
      <div>
        P.S.: Internationalization has not been implemented yet, so I'm sorry
        for the bamboozle!
      </div>
    </div>
  );
};

export default Home;
