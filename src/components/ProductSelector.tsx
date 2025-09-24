import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Plus, Minus, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import puddleFlangeHero from "@/assets/puddle-flange-hero.jpg";
import productRange from "@/assets/product-range.jpg";
import installationGuide from "@/assets/installation-guide.jpg";

interface ProductSelection {
  type: string;
  quantity: number;
  boxQuantity: number;
  size: string;
  color: string;
}

const PRODUCT_TYPES = [
  "Tile Insert Kit with Push In Rubber Ring Seal",
  "Under Over Flange Kit with Rubber Ring Seal",
  "Adjustable Solvent Welded Sleeve"
];

const SIZES = ["50mm", "80mm", "100mm"];

const COLORS = [
  "Polished Stainless Steel",
  "Matte Stainless Steel", 
  "Black Stainless Steel",
  "Gold Stainless Steel",
  "Antique Brass Stainless Steel",
  "Gun Metal Stainless Steel"
];

const PRODUCT_IMAGES = {
  "Tile Insert Kit with Push In Rubber Ring Seal": puddleFlangeHero,
  "Under Over Flange Kit with Rubber Ring Seal": productRange,
  "Adjustable Solvent Welded Sleeve": installationGuide
};

const ProductSelector = () => {
  const { cart, addToCart, removeFromCart, cartTotal, cartValue } = useCart();
  
  const stainlessTotal = cart
    .filter(item => item.type !== "Adjustable Solvent Welded Sleeve" && item.type !== "Under Over Flange Kit with Rubber Ring Seal")
    .reduce((total, item) => total + item.quantity, 0);
  
  const [selection, setSelection] = useState<ProductSelection>({
    type: "",
    quantity: 1,
    boxQuantity: 0,
    size: "",
    color: ""
  });

  const updateSelection = (field: keyof ProductSelection, value: string | number) => {
    setSelection(prev => ({ ...prev, [field]: value }));
  };

  const adjustQuantity = (increment: boolean) => {
    setSelection(prev => ({
      ...prev,
      quantity: Math.max(0, prev.quantity + (increment ? 1 : -1))
    }));
  };

  const adjustBoxQuantity = (increment: boolean) => {
    setSelection(prev => ({
      ...prev,
      boxQuantity: Math.max(0, prev.boxQuantity + (increment ? 1 : -1))
    }));
  };

  const isStainlessSteel = (color: string) => {
    return color === "Polished Stainless Steel" || color === "Matte Stainless Steel";
  };

  const getUnitPrice = (color: string, totalCartQuantity: number, stainlessQuantity: number, productType: string = "") => {
    let singlePrice: number;
    let hasBoxPricing: boolean;
    
    // Determine single price and box pricing eligibility
    if (productType === "Adjustable Solvent Welded Sleeve") {
      singlePrice = 5.50; // AUD including GST
      hasBoxPricing = totalCartQuantity >= 18 || stainlessQuantity >= 18;
    } else if (productType === "Under Over Flange Kit with Rubber Ring Seal") {
      singlePrice = 25.00; // AUD including GST
      hasBoxPricing = totalCartQuantity >= 18;
    } else {
      // Stainless steel parts
      const isStainless = isStainlessSteel(color);
      singlePrice = isStainless ? 115.50 : 130; // AUD including GST
      hasBoxPricing = stainlessQuantity >= 18;
    }
    
    // Apply discount for box pricing: divide by 11, multiply by 10
    return hasBoxPricing ? (singlePrice / 11) * 10 : singlePrice;
  };

  const getTotalPrice = (color: string, quantity: number, totalCartQuantity: number, stainlessQuantity: number, productType: string = "") => {
    return getUnitPrice(color, totalCartQuantity, stainlessQuantity, productType) * quantity;
  };

  const handleAddToCart = () => {
    const isNonColorProduct = selection.type === "Adjustable Solvent Welded Sleeve" || selection.type === "Under Over Flange Kit with Rubber Ring Seal";
    const hasRequiredFields = selection.type && selection.size && (selection.color || isNonColorProduct);
    
    if (hasRequiredFields) {
      // Add individual items
      if (selection.quantity > 0) {
        addToCart({ 
          ...selection, 
          color: isNonColorProduct ? "Standard" : selection.color 
        });
      }
      
      // Add box items
      if (selection.boxQuantity > 0) {
        addToCart({ 
          ...selection, 
          quantity: selection.boxQuantity * 18,
          color: isNonColorProduct ? "Standard" : selection.color 
        });
      }
      
      setSelection(prev => ({ ...prev, quantity: 1, boxQuantity: 0 }));
    }
  };

  const isNonColorProduct = selection.type === "Adjustable Solvent Welded Sleeve" || selection.type === "Under Over Flange Kit with Rubber Ring Seal";
  const isSelectionComplete = selection.type && selection.size && (selection.color || isNonColorProduct) && (selection.quantity > 0 || selection.boxQuantity > 0);
  const totalSelectedQuantity = selection.quantity + (selection.boxQuantity * 18);

  return (
    <section className="py-4 bg-gradient-steel">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Product Configuration */}
          <Card className="shadow-construction">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">ORDER</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Product Type */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Product Type
                </label>
                <Select onValueChange={(value) => updateSelection('type', value)} value={selection.type}>
                  <SelectTrigger className="w-full bg-background border-2 border-border hover:border-primary transition-colors">
                    <SelectValue placeholder="Select product type" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-2 border-border z-50">
                    {PRODUCT_TYPES.map((type) => (
                      <SelectItem key={type} value={type} className="hover:bg-muted">
                        <div className="flex items-center space-x-3 py-1">
                          <img 
                            src={PRODUCT_IMAGES[type as keyof typeof PRODUCT_IMAGES]} 
                            alt={type}
                            className="w-12 h-12 object-cover rounded border border-border flex-shrink-0"
                          />
                          <span className="text-sm leading-tight">{type}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Single Units Quantity (Individual pieces)
                </label>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => adjustQuantity(false)}
                    className="h-10 w-10 p-0 border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-2xl font-bold text-foreground min-w-[3rem] text-center">
                    {selection.quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => adjustQuantity(true)}
                    className="h-10 w-10 p-0 border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Buy individual pieces - Get a discount for box purchases!
                </p>
              </div>

              {/* Box Quantity */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Box Purchase (18 pieces per box)
                </label>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => adjustBoxQuantity(false)}
                    className="h-10 w-10 p-0 border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-2xl font-bold text-foreground min-w-[3rem] text-center">
                    {selection.boxQuantity}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => adjustBoxQuantity(true)}
                    className="h-10 w-10 p-0 border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Number of whole boxes to purchase
                </p>
                {selection.boxQuantity > 0 && (
                  <div className="mt-2">
                    <p className="text-sm text-accent font-medium">
                      Total: {selection.boxQuantity * 18} pieces from boxes
                    </p>
                  </div>
                )}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-2">
                  <p className="text-sm font-semibold text-green-700 mb-1">
                    📦 Box Buy Advantage
                  </p>
                  <p className="text-xs text-green-600">
                    Boxes automatically get the best pricing - no minimum quantity required!
                  </p>
                </div>
              </div>

              {/* Size */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Size
                </label>
                <Select onValueChange={(value) => updateSelection('size', value)} value={selection.size}>
                  <SelectTrigger className="w-full bg-background border-2 border-border hover:border-primary transition-colors">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-2 border-border z-50">
                    {SIZES.map((size) => (
                      <SelectItem key={size} value={size} className="hover:bg-muted">
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Color - Only show for products that come in colors */}
              {selection.type !== "Adjustable Solvent Welded Sleeve" && selection.type !== "Under Over Flange Kit with Rubber Ring Seal" && (
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Stainless Steel Tile Insert Colour Selection
                  </label>
                  <Select onValueChange={(value) => updateSelection('color', value)} value={selection.color}>
                    <SelectTrigger className="w-full bg-background border-2 border-border hover:border-primary transition-colors">
                      <SelectValue placeholder="Select finish" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-2 border-border z-50">
                      {COLORS.map((color) => (
                        <SelectItem key={color} value={color} className="hover:bg-muted">
                          {color}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

               {/* Pricing Display */}
              {(selection.color || selection.type === "Adjustable Solvent Welded Sleeve" || selection.type === "Under Over Flange Kit with Rubber Ring Seal") && totalSelectedQuantity > 0 && (
                <div className="p-4 bg-muted/50 rounded-lg border border-border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-foreground">Unit Price:</span>
                    <span className="text-lg font-bold text-primary">
                      $AUD {getUnitPrice(selection.color || "", cartTotal + totalSelectedQuantity, (selection.type !== "Adjustable Solvent Welded Sleeve" && selection.type !== "Under Over Flange Kit with Rubber Ring Seal") ? stainlessTotal + totalSelectedQuantity : stainlessTotal, selection.type)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-foreground">Individual Total:</span>
                    <span className="text-lg font-bold text-primary">
                      $AUD {getTotalPrice(selection.color || "", selection.quantity, cartTotal + totalSelectedQuantity, (selection.type !== "Adjustable Solvent Welded Sleeve" && selection.type !== "Under Over Flange Kit with Rubber Ring Seal") ? stainlessTotal + totalSelectedQuantity : stainlessTotal, selection.type)}
                    </span>
                  </div>
                  {selection.boxQuantity > 0 && (
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-foreground">Box Total ({selection.boxQuantity} boxes):</span>
                      <span className="text-lg font-bold text-primary">
                        $AUD {getTotalPrice(selection.color || "", selection.boxQuantity * 18, cartTotal + totalSelectedQuantity, (selection.type !== "Adjustable Solvent Welded Sleeve" && selection.type !== "Under Over Flange Kit with Rubber Ring Seal") ? stainlessTotal + totalSelectedQuantity : stainlessTotal, selection.type)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">Grand Total:</span>
                    <span className="text-xl font-bold text-accent">
                      $AUD {getTotalPrice(selection.color || "", selection.quantity, cartTotal + totalSelectedQuantity, (selection.type !== "Adjustable Solvent Welded Sleeve" && selection.type !== "Under Over Flange Kit with Rubber Ring Seal") ? stainlessTotal + totalSelectedQuantity : stainlessTotal, selection.type) + (selection.boxQuantity > 0 ? getTotalPrice(selection.color || "", selection.boxQuantity * 18, cartTotal + totalSelectedQuantity, (selection.type !== "Adjustable Solvent Welded Sleeve" && selection.type !== "Under Over Flange Kit with Rubber Ring Seal") ? stainlessTotal + totalSelectedQuantity : stainlessTotal, selection.type) : 0)}
                    </span>
                  </div>
                  {(() => {
                    const futureStainless = (selection.type !== "Adjustable Solvent Welded Sleeve" && selection.type !== "Under Over Flange Kit with Rubber Ring Seal") ? stainlessTotal + selection.quantity : stainlessTotal;
                    const futureTotal = cartTotal + selection.quantity;
                    let hasBoxPricing = false;
                    
                    if (selection.type === "Adjustable Solvent Welded Sleeve") {
                      hasBoxPricing = futureTotal >= 18 || stainlessTotal >= 18;
                    } else if (selection.type === "Under Over Flange Kit with Rubber Ring Seal") {
                      hasBoxPricing = futureTotal >= 18;
                    } else {
                      hasBoxPricing = futureStainless >= 18;
                    }
                    
                    return hasBoxPricing ? (
                      <p className="text-sm text-accent font-medium mt-2">
                        Box pricing applied! {(() => {
                          if (selection.type === "Adjustable Solvent Welded Sleeve") {
                            return "(18+ total units or 18+ stainless parts)";
                          } else if (selection.type === "Under Over Flange Kit with Rubber Ring Seal") {
                            return "(18+ total units)";
                          } else {
                            return "(18+ stainless parts - mixed colours allowed)";
                          }
                        })()}
                      </p>
                    ) : (
                      <p className="text-sm text-muted-foreground mt-2">
                        {(() => {
                          if (selection.type === "Adjustable Solvent Welded Sleeve") {
                            return "Box pricing available with 18+ total units or 18+ stainless parts<br/>ABS Sleeve: $AUD 6.00/unit with box pricing";
                          } else if (selection.type === "Under Over Flange Kit with Rubber Ring Seal") {
                            return "Box pricing available at 18+ total units<br/>ABS Puddle Flange Kit: Polished SS $AUD 90.00/unit | Others $AUD 117.00/unit";
                          } else {
                            return "Box pricing available at 18+ stainless parts (mixed colours allowed)<br/>Stainless: $AUD 80/unit | Other finishes: $AUD 100/unit";
                          }
                        })()}
                      </p>
                    );
                  })()}
                  <p className="text-xs text-muted-foreground mt-1">
                    Prices include GST
                  </p>
                </div>
              )}

              <Button
                onClick={handleAddToCart}
                disabled={!isSelectionComplete}
                className="w-full bg-gradient-primary hover:shadow-construction transition-all duration-300 text-lg py-6 font-semibold"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </CardContent>
          </Card>

          {/* Shopping Cart */}
          <Card className="shadow-construction" id="shopping-cart">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <ShoppingCart className="mr-2 h-6 w-6" />
                Shopping Cart ({cartTotal} items)
              </CardTitle>
            </CardHeader>
            <CardContent>
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg bg-muted/50 relative">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(index)}
                        className="absolute top-2 right-2 h-6 w-6 p-0 hover:bg-destructive hover:text-destructive-foreground"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      <div className="font-semibold text-foreground mb-2 pr-8">{item.type}</div>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div>Quantity: {item.quantity}</div>
                        <div>Size: {item.size}</div>
                        {item.type !== "Adjustable Solvent Welded Sleeve" && item.type !== "Under Over Flange Kit with Rubber Ring Seal" && (
                          <div>Finish: {item.color}</div>
                        )}
                      </div>
                      <div className="flex justify-between items-center mt-3 pt-2 border-t border-border">
                        <span className="text-sm text-muted-foreground">
                          $AUD {getUnitPrice(item.color, cartTotal, stainlessTotal, item.type)}/unit
                        </span>
                        <span className="font-bold text-accent">
                          $AUD {getTotalPrice(item.color, item.quantity, cartTotal, stainlessTotal, item.type)}
                        </span>
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-foreground">Total Items:</span>
                      <span className="text-lg font-semibold text-foreground">{cartTotal}</span>
                    </div>
                    {(cartTotal >= 20 || stainlessTotal >= 20) && (
                      <div className="text-sm text-accent font-medium mb-2">
                        ✓ Box pricing applied {stainlessTotal >= 20 ? "(stainless parts qualify)" : "(total quantity qualifies)"}
                      </div>
                    )}
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold text-foreground">Total:</span>
                      <span className="text-2xl font-bold text-primary">$AUD {cartValue}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">Prices include GST</p>
                    <Button 
                      className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-semibold py-4 text-lg"
                    >
                      Checkout - Pay with Credit Card
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductSelector;