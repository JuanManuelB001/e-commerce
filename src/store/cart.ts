import { create } from "zustand";
import { persist } from "zustand/middleware";


export const cartStore = create(
    persist((set) => ({
    cart:[],
    updateCart: (newData: any) => set((state: any) =>({
         cart:[...state.cart, newData]
    })),
    removeItemCart: (index: number) =>set((state:any)=>({
        cart: state.cart.filter((_:any, i:any) => i != index)
    })),
    clearCart: () => set({cart: []})
}), {
    name: "cart-store"
}))