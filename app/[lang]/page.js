import { montserrat } from "public/fonts/fonts";
import clsx from "clsx";
import Link from "next/link";

const Home = async ({ params }) => {
  const { lang } = await params;

  return (
    <div className="flex max-w-2xl flex-col space-y-4">
      <div>
        Hey there! My name is Mark Evers and I'm a Web Developer! I'm currently
        in my 4th (and last) year of studying HBO-ICT, specialized in Web
        Development, at the HAN in Arnhem, The Netherlands!
      </div>
      <div>
        If you want to see the code for this website, you can find it on{" "}
        <Link
          href="https://github.com/markevers-dev/portfolio"
          target="_blank"
          className={clsx(
            "font-bold tracking-wider underline transition-colors duration-200 hover:text-primary-600 active:text-primary-500 dark:hover:text-primary-200 dark:active:text-primary-300",
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
