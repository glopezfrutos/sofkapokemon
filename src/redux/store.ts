import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import { allPokemonSlice } from "./pokemon/allPokemonSlice";

const store = configureStore({
    reducer: {
        pokemons: allPokemonSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
