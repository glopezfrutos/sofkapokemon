import { fetchStatus } from "../../shared/fetchStatus"

export type allPokemonType = {
    name: string
    url: string
}

export type eachPokemonType = {
    name: string
    sprites: {
        front_default: string
    }
    abilities: [{ability: {name: string}}]
    moves: [{move: {name: string}}]
    weight: number
    types: [{
        slot: number
        type: { name: string }
    }]
}

export interface IPokemonState {
    pokemons: eachPokemonType[]
    status: fetchStatus
    error: string | null
}

