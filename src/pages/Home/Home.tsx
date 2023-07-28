import Page from "@/layouts/Page";
import Hero from "./Hero";
import Features from "./Features";
import Pricing from "./Pricing";
import Footer from "./Footer";

export const Home = () => {
  return (
    <Page>
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </Page>
  );
};
