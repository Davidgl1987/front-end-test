import { create } from 'zustand'

export const useStore = create((set) => ({
  cart: [],
  addToCart: (product) => set(state => ({
    cart: [...state.cart, product]
  })),
  previewCart: false,
  togglePreviewCart: () => set(state => ({ previewCart: !state.previewCart }))
}))
