import {
  About,
  Contact,
  Cursor,
  FAQs,
  Footer,
  Home,
  Navigation,
  Progress,
  Providers,
  Recruiting,
  Topbar,
} from "./sections";

export const App = () => {
  return (
    <>
      <Cursor />
      <header>
        <Topbar />
        <Navigation />
      </header>
      <main>
        <Home />
        <About />
        <Providers />
        <FAQs />
        <Progress />
        <Contact />
        <Recruiting />
      </main>
      <Footer />
    </>
  );
};
