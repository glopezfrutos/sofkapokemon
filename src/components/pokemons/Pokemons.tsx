import React from 'react'
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { fetchStatus } from "../../shared/fetchStatus";
import {
    getAllPokemons,
    selectPokemonFetchError,
    selectPokemonState,
    selectPokemonStatus
} from '../../redux/pokemon/pokemonSlice';

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

                {!error && pokemonState.results.map(product =>
                    //<ProductRow key={product.id} p={product} />
                    <div className='col-sm-3' key={product.name}>
                        <div className="card" style={{ width: "18rem" }}>
                            <div className='text-center'>
                                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + product.url.slice(-3, -1) + ".png"} className="img-fluid justify-content-center" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.url}</p>
                            </div>

                        </div>
                    </div>
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
