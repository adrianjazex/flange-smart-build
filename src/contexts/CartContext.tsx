import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  type: string;
  quantity: number;
  size: string;
  color: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartValue: number;
  recentlyAdded: boolean;
  setRecentlyAdded: (value: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
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
  
  // Special pricing for Under Over Flange Kit (ABS parts only)
  if (productType === "Under Over Flange Kit with Rubber Ring Seal") {
    const flangeBoxPricing = totalCartQuantity >= 20;
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

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [recentlyAdded, setRecentlyAdded] = useState(false);

  const addToCart = (item: CartItem) => {
    setCart(prev => [...prev, item]);
    setRecentlyAdded(true);
    setTimeout(() => setRecentlyAdded(false), 1000); // Reset animation after 1 second
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((total, item) => total + item.quantity, 0);
  const stainlessTotal = cart
    .filter(item => item.type !== "Adjustable Solvent Welded Sleeve" && item.type !== "Under Over Flange Kit with Rubber Ring Seal")
    .reduce((total, item) => total + item.quantity, 0);
  const cartValue = cart.reduce((total, item) => total + getTotalPrice(item.color, item.quantity, cartTotal, stainlessTotal, item.type), 0);

  const value: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    cartTotal,
    cartValue,
    recentlyAdded,
    setRecentlyAdded,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};