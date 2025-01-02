import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useBearStore = create(
    persist(
        (set, get) => ({
            bears: 0,
            addABear: () => set({ bears: get().bears + 1 }),
        }),
        {
            name: 'food-storage',
            storage: createJSONStorage(() => localStorage),
        },
    ),
)
