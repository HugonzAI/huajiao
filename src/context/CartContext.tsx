'use client';

import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { CartState, CartAction, CartItem } from '@/types/cart';
import { Product } from '@/types/product';

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPriceHKD: 0,
};

function calcTotals(items: CartItem[]): Pick<CartState, 'totalItems' | 'totalPriceHKD'> {
  return {
    totalItems: items.reduce((sum, i) => sum + i.quantity, 0),
    totalPriceHKD: items.reduce((sum, i) => sum + i.product.priceHKD * i.quantity, 0),
  };
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'HYDRATE': {
      const items = action.items;
      return { items, ...calcTotals(items) };
    }
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.product.id === action.product.id);
      const items = existing
        ? state.items.map((i) =>
            i.product.id === action.product.id
              ? { ...i, quantity: i.quantity + action.quantity }
              : i
          )
        : [...state.items, { product: action.product, quantity: action.quantity }];
      return { items, ...calcTotals(items) };
    }
    case 'REMOVE_ITEM': {
      const items = state.items.filter((i) => i.product.id !== action.productId);
      return { items, ...calcTotals(items) };
    }
    case 'UPDATE_QUANTITY': {
      const items =
        action.quantity <= 0
          ? state.items.filter((i) => i.product.id !== action.productId)
          : state.items.map((i) =>
              i.product.id === action.productId ? { ...i, quantity: action.quantity } : i
            );
      return { items, ...calcTotals(items) };
    }
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
}

interface CartContextValue extends CartState {
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('huajiao-cart');
      if (stored) {
        const items: CartItem[] = JSON.parse(stored);
        dispatch({ type: 'HYDRATE', items });
      }
    } catch {}
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem('huajiao-cart', JSON.stringify(state.items));
    } catch {}
  }, [state.items]);

  const addItem = (product: Product, quantity = 1) =>
    dispatch({ type: 'ADD_ITEM', product, quantity });
  const removeItem = (productId: string) =>
    dispatch({ type: 'REMOVE_ITEM', productId });
  const updateQuantity = (productId: string, quantity: number) =>
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return (
    <CartContext.Provider value={{ ...state, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
