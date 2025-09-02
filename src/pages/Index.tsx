import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import InstallationGuide from "@/components/InstallationGuide";
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
      <InstallationGuide />
      <Footer />
    </div>
  );
};

export default Index;