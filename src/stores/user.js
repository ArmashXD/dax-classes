import { create } from 'zustand'

const initialState = {
    name: '',
    age: 0,
    occupation: ''

}

const useUser = create((set) => ({
    user: initialState,
    setUser: () => set((state) => ({
        user: {
            name: 'armash',
            age: 23,
            occupation: "web developer"
        }
    })),
    clearUser: () => set((state) => ({
        user: initialState
    })),
}))


export default useUser;
