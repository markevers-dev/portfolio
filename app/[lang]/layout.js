import { Footer, Header } from "components";

const Layout = async ({ children, params }) => {
  const { lang } = await params;

  return (
    <>
      <Header lang={lang} />
      <main className="flex-grow px-8 md:px-24">{children}</main>
      <Footer lang={lang} />
    </>
  );
};

export default Layout;
