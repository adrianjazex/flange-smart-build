import Header from "@/components/Header";
import StockistsSection from "@/components/StockistsSection";
import Footer from "@/components/Footer";

const Stockists = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <StockistsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Stockists;