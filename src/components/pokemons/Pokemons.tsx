import React from 'react'
import { RootState, useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { fetchStatus } from "../../shared/fetchStatus";
import {
    getAllPokemons,
    selectPokemonFetchError,
    selectPokemonState,
    selectPokemonStatus
} from '../../redux/pokemon/allPokemonSlice';
import PokemonCard from './PokemonCard';

const Pokemons = () => {

    const dispatch = useAppDispatch()

    const error = useSelector(selectPokemonFetchError())
    const status = useSelector(selectPokemonStatus())
    const pokemonState = useSelector(selectPokemonState())

    React.useEffect(() => {
        if (status === fetchStatus.IDLE) {
            dispatch(getAllPokemons())
        }
    }, [dispatch])

    const [pokemonFinder, setPokemonFinder] = React.useState("")

    return (
        <div className="m-3">
            <h2>Pokemons</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Pokemon finder: </label>
                    <input type="text" className="form-control" value={pokemonFinder} onChange={(e) => setPokemonFinder(e.target.value)} />
                    <div id="emailHelp" className="form-text">Find a pokemon from the list</div>
                </div>
            </form>
            <div className="row">
                {!error && pokemonState.map(pokemon => {
                    if (pokemonFinder !== "") {
                        if (pokemon.name.includes(pokemonFinder))
                            return <PokemonCard key={pokemon.name} pokemon={pokemon} />
                        return
                    }
                    return <PokemonCard key={pokemon.name} pokemon={pokemon} />
                })}
            </div>
            {status === fetchStatus.PENDING ?
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> :
                ""}
            {status === fetchStatus.FAILED ?
                <p>Sorry, there was an error loading data.</p> :
                ""}
        </div>
    )
}

export default Pokemons
