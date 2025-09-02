import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InstallationGuide from "@/components/InstallationGuide";
import ProductSelector from "@/components/ProductSelector";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <div id="order">
        <ProductSelector />
      </div>
      <InstallationGuide />
      <Footer />
    </div>
  );
};

export default Index;