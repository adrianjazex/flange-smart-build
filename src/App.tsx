import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BecomeStockist from "./pages/BecomeStockist";
import ContactUs from "./pages/ContactUs";
import Stockists from "./pages/Stockists";
import FullRange from "./pages/FullRange";
import InstallationInstructions from "./pages/InstallationInstructions";
import WarrantiesLimitations from "./pages/WarrantiesLimitations";
import WaterproofScreed from "./pages/WaterproofScreed";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/become-stockist" element={<BecomeStockist />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/stockists" element={<Stockists />} />
            <Route path="/full-range" element={<FullRange />} />
            <Route path="/installation-instructions" element={<InstallationInstructions />} />
            <Route path="/warranties-limitations" element={<WarrantiesLimitations />} />
            <Route path="/waterproof-screed" element={<WaterproofScreed />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
