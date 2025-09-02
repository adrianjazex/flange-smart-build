import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, Lock, Droplets, Shield } from "lucide-react";
import productRangeImage from "@/assets/product-range.jpg";

const FEATURES = [
  {
    icon: Layers,
    title: "Dual-Stage System",
    description: "Primary flange installs in membrane, secondary locks over screed"
  },
  {
    icon: Lock,
    title: "Secure Locking",
    description: "Patented locking mechanism ensures perfect alignment and seal"
  },
  {
    icon: Droplets,
    title: "100% Waterproof",
    description: "Guaranteed waterproof seal when installed correctly"
  },
  {
    icon: Shield,
    title: "Premium Materials",
    description: "High-grade stainless steel construction for lasting durability"
  }
];

const PRODUCT_RANGE = [
  {
    name: "Standard Puddle Flanges",
    description: "Basic dual-stage puddle flange system for standard installations",
    sizes: ["50mm", "80mm", "100mm"],
    bestFor: "Most residential and commercial applications"
  },
  {
    name: "Puddle Flange with Tail/Suit Kit",
    description: "Complete system with O-ring connection for secure pipe joining",
    sizes: ["50mm", "80mm", "100mm"], 
    bestFor: "Professional installations requiring O-ring seals"
  },
  {
    name: "Puddle Flange with Solvent Weld",
    description: "System with solvent weld adapter for permanent connections",
    sizes: ["50mm", "80mm", "100mm"],
    bestFor: "Permanent installations with PVC pipe systems"
  }
];

const ProductShowcase = () => {
  return null;
};

export default ProductShowcase;