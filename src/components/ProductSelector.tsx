import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Plus, Minus } from "lucide-react";

interface ProductSelection {
  type: string;
  quantity: number;
  size: string;
  color: string;
  postcode: string;
}

const PRODUCT_TYPES = [
  "Tile Insert Kit with Push In Rubber Ring Seal",
  "Tile Insert Kit with Tail/Suit Kit with O-ring", 
  "Tile Insert Kit with Solvent Weld Adapter"
];

const SIZES = ["50mm", "80mm", "100mm"];

const COLORS = [
  "Polished Stainless Steel",
  "Matte Stainless Steel", 
  "Black Stainless Steel",
  "Gold Stainless Steel",
  "Rose Stainless Steel",
  "Gun Metal Stainless Steel"
];

const ProductSelector = () => {
  const [selection, setSelection] = useState<ProductSelection>({
    type: "",
    quantity: 1,
    size: "",
    color: "",
    postcode: ""
  });

  const [cart, setCart] = useState<ProductSelection[]>([]);

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

  const getUnitPrice = (color: string, quantity: number) => {
    const isStainless = isStainlessSteel(color);
    const isBoxQuantity = quantity >= 18;
    
    if (isStainless) {
      return isBoxQuantity ? 80 : 110;
    } else {
      return isBoxQuantity ? 100 : 130;
    }
  };

  const getTotalPrice = (color: string, quantity: number) => {
    return getUnitPrice(color, quantity) * quantity;
  };

  const addToCart = () => {
    if (selection.type && selection.size && selection.color && selection.postcode) {
      setCart(prev => [...prev, { ...selection }]);
      setSelection(prev => ({ ...prev, quantity: 1 }));
    }
  };

  const isSelectionComplete = selection.type && selection.size && selection.color && selection.postcode;
  const cartTotal = cart.reduce((total, item) => total + item.quantity, 0);
  const cartValue = cart.reduce((total, item) => total + getTotalPrice(item.color, item.quantity), 0);

  return (
    <section className="py-16 bg-gradient-steel">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Configure Your Order</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select your tile insert kit specifications and we'll calculate shipping to your location
          </p>
        </div>

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
                {selection.quantity >= 18 && (
                  <p className="text-sm text-accent font-medium mt-2">
                    Box pricing applies! (18+ units)
                  </p>
                )}
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

              {/* Color */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Finish
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

              {/* Postcode */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Postcode (for shipping calculation)
                </label>
                <input
                  type="text"
                  value={selection.postcode}
                  onChange={(e) => updateSelection('postcode', e.target.value)}
                  placeholder="Enter your postcode"
                  className="w-full px-4 py-3 border-2 border-border hover:border-primary focus:border-primary focus:ring-0 rounded-md bg-background text-foreground transition-colors"
                />
              </div>

              {/* Pricing Display */}
              {selection.color && (
                <div className="p-4 bg-muted/50 rounded-lg border border-border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-foreground">Unit Price:</span>
                    <span className="text-lg font-bold text-primary">
                      ${getUnitPrice(selection.color, selection.quantity)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">Total:</span>
                    <span className="text-xl font-bold text-accent">
                      ${getTotalPrice(selection.color, selection.quantity)}
                    </span>
                  </div>
                  {selection.quantity < 18 && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {isStainlessSteel(selection.color) 
                        ? "Box price: $80/unit (18+ units)" 
                        : "Box price: $100/unit (18+ units)"}
                    </p>
                  )}
                </div>
              )}

              <Button
                onClick={addToCart}
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
                    <div key={index} className="p-4 border border-border rounded-lg bg-muted/50">
                      <div className="font-semibold text-foreground mb-2">{item.type}</div>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div>Quantity: {item.quantity}</div>
                        <div>Size: {item.size}</div>
                        <div>Finish: {item.color}</div>
                        <div>Postcode: {item.postcode}</div>
                      </div>
                      <div className="flex justify-between items-center mt-3 pt-2 border-t border-border">
                        <span className="text-sm text-muted-foreground">
                          ${getUnitPrice(item.color, item.quantity)}/unit
                        </span>
                        <span className="font-bold text-accent">
                          ${getTotalPrice(item.color, item.quantity)}
                        </span>
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold text-foreground">Total:</span>
                      <span className="text-2xl font-bold text-primary">${cartValue}</span>
                    </div>
                    <Button 
                      className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-semibold py-4 text-lg"
                    >
                      Calculate Shipping & Checkout
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