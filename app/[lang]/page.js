import { translations } from "config/translations";
import Image from "next/image";

const Home = async ({ params }) => {
  const { lang } = await params;
  const homeText = translations.home_page;

  return (
    <div className="mb-4 flex flex-col items-center justify-center max-lg:space-y-12 md:mb-6 lg:mb-12 lg:flex-row lg:space-x-48">
      <div className="flex max-w-2xl flex-col space-y-4">
        <h1 className="text-3xl font-bold text-primary-700 dark:text-primary-200">
          {homeText.title[lang]}
        </h1>
        <div className="text-xl">{homeText.description[lang]}</div>
      </div>
      <Image
        src="/assets/hello_its_me.avif"
        width="1203"
        height="1129"
        alt={homeText.image_alt[lang]}
        className="max-w-96 rounded-md shadow-sm"
      />
    </div>
  );
};

export default Home;
