import { fetchStatus } from "../../shared/fetchStatus"

export type allPokemonType = {
    name: string
    url: string
}

export type eachPokemonType = {
    order: number
    name: string
    sprites: {
        front_default: string
        back_default: string
        back_shiny: string
        front_shiny: string
    }
    abilities: [{ability: {name: string}}]
    moves: [{move: {name: string}}]
    weight: number
    height: number
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

