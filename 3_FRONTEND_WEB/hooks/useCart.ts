import { useCartStore } from '../store/cartStore';

export const useCart = () => {
  const { items, addItem, removeItem, updateQuantity, clearCart, getTotal } = useCartStore();

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    total: getTotal(),
    itemCount: items.length,
  };
};
