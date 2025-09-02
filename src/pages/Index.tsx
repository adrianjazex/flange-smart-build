import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import ProductSelector from "@/components/ProductSelector";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductShowcase />
      <div id="order">
        <ProductSelector />
      </div>
      <Footer />
    </div>
  );
};

export default Index;