import React, { useState, useCallback } from 'react';

export type CartContextValue = {
  isCartOpen: boolean;
  toggleCart(): void;
};

export const CartContext = React.createContext<Partial<CartContextValue>>({});

const CartContextControl: React.FC = ({ children }) => {
  const [isCartOpen, setIsOpenState] = useState(false);
  const toggleCart = useCallback(() => {
    setIsOpenState(!isCartOpen);
  }, [isCartOpen]);

  const value = { isCartOpen, toggleCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextControl;
