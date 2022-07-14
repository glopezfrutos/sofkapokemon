import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchStatus } from "../../shared/fetchStatus";
import { RootState } from '../store'
import { globalUrl } from "../../shared/globalUrl";
import { IPokemonState, allPokemonType, eachPokemonType } from "./pokemonTypes";


export const getEachPokemon = async (pokemon: allPokemonType) => {
    const response = await fetch(pokemon.url, { method: 'GET' })
    const pokemonData = await response.json() as eachPokemonType
    return pokemonData
}

const initialState: IPokemonState = {
    pokemons: [],
    status: fetchStatus.IDLE,
    error: null
}

const ENDPOINT = globalUrl + "pokemon?offset=0&limit=50" // + {id or name}/

export const getAllPokemons = createAsyncThunk('pokemon/fetchAll', async () => {
    const response = await fetch(ENDPOINT, { method: 'GET' })
    const initialList = await response.json() as { results: allPokemonType[] }
    const allPokemon: eachPokemonType[] = []
    for (const result of initialList.results) {
        const eachPokemon = await getEachPokemon(result)
        allPokemon.push(eachPokemon)
    }
    return allPokemon
})


export const allPokemonSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get
        builder.addCase(getAllPokemons.pending, (state, action) => {
            state.status = fetchStatus.PENDING
        })
        builder.addCase(getAllPokemons.fulfilled, (state, action) => {
            state.status = fetchStatus.COMPLETED
            state.pokemons = action.payload
        })
        builder.addCase(getAllPokemons.rejected, (state, action) => {
            state.status = fetchStatus.FAILED
            state.error = 'Something went wrong while fetching'
            state.pokemons = []
        })
    }
});

// actions

// state selectors
export const selectPokemonState = () => (state: RootState) => state.pokemons.pokemons
export const selectPokemonStatus = () => (state: RootState) => state.pokemons.status
export const selectPokemonFetchError = () => (state: RootState) => state.pokemons.error
