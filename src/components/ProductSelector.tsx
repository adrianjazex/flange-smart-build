import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Plus, Minus, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface ProductSelection {
  type: string;
  quantity: number;
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

const ProductSelector = () => {
  const { cart, addToCart, removeFromCart, cartTotal, cartValue } = useCart();
  
  const stainlessTotal = cart
    .filter(item => item.type !== "Adjustable Solvent Welded Sleeve")
    .reduce((total, item) => total + item.quantity, 0);
  
  const [selection, setSelection] = useState<ProductSelection>({
    type: "",
    quantity: 1,
    size: "",
    color: ""
  });

  const updateSelection = (field: keyof ProductSelection, value: string | number) => {
    setSelection(prev => ({ ...prev, [field]: value }));
  };

  const adjustQuantity = (increment: boolean) => {
    setSelection(prev => ({
      ...prev,
      quantity: Math.max(1, prev.quantity + (increment ? 1 : -1))
    }));
  };

  const isStainlessSteel = (color: string) => {
    return color === "Polished Stainless Steel" || color === "Matte Stainless Steel";
  };

  const getUnitPrice = (color: string, totalCartQuantity: number, stainlessQuantity: number, productType: string = "") => {
    // Special pricing for Adjustable Solvent Welded Sleeve
    if (productType === "Adjustable Solvent Welded Sleeve") {
      // Sleeves get box pricing if total cart >= 20 OR if stainless quantity >= 20
      const sleeveBoxPricing = totalCartQuantity >= 20 || stainlessQuantity >= 20;
      return sleeveBoxPricing ? 5.00 : 5.50; // AUD including GST
    }
    
    // Special pricing for Under Over Flange Kit
    if (productType === "Under Over Flange Kit with Rubber Ring Seal") {
      const flangeBoxPricing = stainlessQuantity >= 20;
      return flangeBoxPricing ? 20.00 : 25.00; // AUD including GST
    }
    
    // Stainless steel parts only get box pricing if stainless quantity >= 20
    const stainlessBoxPricing = stainlessQuantity >= 20;
    const isStainless = isStainlessSteel(color);
    if (isStainless) {
      return stainlessBoxPricing ? 80 : 110; // AUD including GST
    } else {
      return stainlessBoxPricing ? 100 : 130; // AUD including GST
    }
  };

  const getTotalPrice = (color: string, quantity: number, totalCartQuantity: number, stainlessQuantity: number, productType: string = "") => {
    return getUnitPrice(color, totalCartQuantity, stainlessQuantity, productType) * quantity;
  };

  const handleAddToCart = () => {
    const isSleeveProduct = selection.type === "Adjustable Solvent Welded Sleeve";
    const hasRequiredFields = selection.type && selection.size && (selection.color || isSleeveProduct);
    
    if (hasRequiredFields) {
      addToCart({ 
        ...selection, 
        color: isSleeveProduct ? "Standard" : selection.color 
      });
      setSelection(prev => ({ ...prev, quantity: 1 }));
    }
  };

  const isSleeveProduct = selection.type === "Adjustable Solvent Welded Sleeve";
  const isSelectionComplete = selection.type && selection.size && (selection.color || isSleeveProduct);

  return (
    <section className="py-4 bg-gradient-steel">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Product Configuration */}
          <Card className="shadow-construction">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Product Configuration</CardTitle>
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
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Quantity
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
                {(() => {
                  const futureStainless = selection.type !== "Adjustable Solvent Welded Sleeve" ? stainlessTotal + selection.quantity : stainlessTotal;
                  const futureTotal = cartTotal + selection.quantity;
                  let willGetBoxPricing = false;
                  
                  if (selection.type === "Adjustable Solvent Welded Sleeve") {
                    willGetBoxPricing = futureTotal >= 20 || stainlessTotal >= 20;
                  } else if (selection.type === "Under Over Flange Kit with Rubber Ring Seal") {
                    willGetBoxPricing = stainlessTotal >= 20;
                  } else {
                    willGetBoxPricing = futureStainless >= 20;
                  }
                  
                  return willGetBoxPricing ? (
                    <p className="text-sm text-accent font-medium mt-2">
                      Box pricing will apply! {(() => {
                        if (selection.type === "Adjustable Solvent Welded Sleeve") {
                          return "(20+ total units or 20+ stainless parts)";
                        } else if (selection.type === "Under Over Flange Kit with Rubber Ring Seal") {
                          return "(20+ stainless parts)";
                        } else {
                          return "(20+ stainless parts - mixed colours allowed)";
                        }
                      })()}
                    </p>
                  ) : (
                    <p className="text-sm text-muted-foreground mt-2">
                      {(() => {
                        if (selection.type === "Adjustable Solvent Welded Sleeve") {
                          return "Box pricing applies at 20+ total units or 20+ stainless parts";
                        } else if (selection.type === "Under Over Flange Kit with Rubber Ring Seal") {
                          return "Box pricing applies at 20+ stainless parts";
                        } else {
                          return "Box pricing applies at 20+ stainless parts";
                        }
                      })()}
                    </p>
                  );
                })()}
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
              {selection.type !== "Adjustable Solvent Welded Sleeve" && (
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
              {(selection.color || selection.type === "Adjustable Solvent Welded Sleeve") && (
                <div className="p-4 bg-muted/50 rounded-lg border border-border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-foreground">Unit Price:</span>
                    <span className="text-lg font-bold text-primary">
                      $AUD {getUnitPrice(selection.color || "", cartTotal + selection.quantity, selection.type !== "Adjustable Solvent Welded Sleeve" ? stainlessTotal + selection.quantity : stainlessTotal, selection.type)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">Total:</span>
                    <span className="text-xl font-bold text-accent">
                      $AUD {getTotalPrice(selection.color || "", selection.quantity, cartTotal + selection.quantity, selection.type !== "Adjustable Solvent Welded Sleeve" ? stainlessTotal + selection.quantity : stainlessTotal, selection.type)}
                    </span>
                  </div>
                  {(() => {
                    const futureStainless = selection.type !== "Adjustable Solvent Welded Sleeve" ? stainlessTotal + selection.quantity : stainlessTotal;
                    const futureTotal = cartTotal + selection.quantity;
                    let hasBoxPricing = false;
                    
                    if (selection.type === "Adjustable Solvent Welded Sleeve") {
                      hasBoxPricing = futureTotal >= 20 || stainlessTotal >= 20;
                    } else if (selection.type === "Under Over Flange Kit with Rubber Ring Seal") {
                      hasBoxPricing = stainlessTotal >= 20;
                    } else {
                      hasBoxPricing = futureStainless >= 20;
                    }
                    
                    return hasBoxPricing ? (
                      <p className="text-sm text-accent font-medium mt-2">
                        Box pricing applied! {(() => {
                          if (selection.type === "Adjustable Solvent Welded Sleeve") {
                            return "(20+ total units or 20+ stainless parts)";
                          } else if (selection.type === "Under Over Flange Kit with Rubber Ring Seal") {
                            return "(20+ stainless parts)";
                          } else {
                            return "(20+ stainless parts - mixed colours allowed)";
                          }
                        })()}
                      </p>
                    ) : (
                      <p className="text-sm text-muted-foreground mt-2">
                        {(() => {
                          if (selection.type === "Adjustable Solvent Welded Sleeve") {
                            return "Box pricing available with 20+ total units or 20+ stainless parts<br/>ABS Sleeve: $AUD 5.00/unit with box pricing";
                          } else if (selection.type === "Under Over Flange Kit with Rubber Ring Seal") {
                            return "Box pricing available at 20+ stainless parts<br/>Flange Kit: $AUD 20.00/unit with box pricing";
                          } else {
                            return "Box pricing available at 20+ stainless parts (mixed colours allowed)<br/>Stainless: $AUD 80/unit | Other finishes: $AUD 100/unit";
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
          <Card className="shadow-construction">
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
                        {item.type !== "Adjustable Solvent Welded Sleeve" && (
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