import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import { pokemonSlice } from "./pokemon/pokemonSlice";

const store = configureStore({
    reducer: {
        pokemons: pokemonSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
