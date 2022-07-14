import React from 'react'
import { useAppDispatch } from "../../redux/store";
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

    return (
        <div className="m-3">
            <h2>Pokemons</h2>
            <div className="row">
                {!error && pokemonState.map(pokemon =>
                    <PokemonCard key={pokemon.name} pokemon={pokemon} />
                )}
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
