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
  const cartValue = cart.reduce((total, item) => total + getTotalPrice(item.color, item.quantity), 0);

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