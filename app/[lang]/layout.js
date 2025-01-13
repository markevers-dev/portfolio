import { Footer, Header } from "components";

const Layout = async ({ children, params }) => {
  const { lang } = await params;

  return (
    <>
      <Header lang={lang} />
      <main className="flex-grow">{children}</main>
      <Footer lang={lang} />
    </>
  );
};

export default Layout;
