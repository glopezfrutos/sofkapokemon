import { fetchStatus } from "../../shared/fetchStatus"

export type pokemonType = {
    name: string
    url: string
}

export interface IPokemonState {
    pokemons: { results: pokemonType[] }
    status: fetchStatus
    error: string | null
}
