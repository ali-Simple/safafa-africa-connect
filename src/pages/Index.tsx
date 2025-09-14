import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import GlobalPartnerships from "@/components/GlobalPartnerships";
import AfricaMarkets from "@/components/AfricaMarkets";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <GlobalPartnerships />
        <AfricaMarkets />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
