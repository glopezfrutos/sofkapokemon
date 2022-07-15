import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getAllPokemons, selectPokemonFetchError, selectPokemonState, selectPokemonStatus } from '../../redux/pokemon/allPokemonSlice'
import { useAppDispatch } from '../../redux/store'
import { capitalize } from '../../shared/capitalize'
import { fetchStatus } from '../../shared/fetchStatus'

const PokemonDetails = () => {
    const params = useParams()
    const dispatch = useAppDispatch()

    const error = useSelector(selectPokemonFetchError())
    const status = useSelector(selectPokemonStatus())
    const pokemonState = useSelector(selectPokemonState())

    React.useEffect(() => {
        if (status === fetchStatus.IDLE) {
            dispatch(getAllPokemons())
        }
    }, [dispatch])


    const pokemon = pokemonState.filter(p => p.order == parseInt(params.pokemonOrder ? params.pokemonOrder : ""))[0]

    return (
        <div>
            {pokemon ?
                <div className='m-3 p-2'>
                    <div className="card">
                        <h5 className="card-header text-center justify-content-center">{capitalize(pokemon.name)} </h5>

                        {/* Pictures */}
                        <div id="carouselExampleControls" className="carousel slide carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="d-flex justify-content-center">
                                        <img src={pokemon.sprites.front_default} className="d-block w-20" alt={pokemon.sprites.front_default} />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="d-flex justify-content-center">
                                        <img src={pokemon.sprites.back_default} className="d-block w-20" alt={pokemon.sprites.back_default} />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="d-flex justify-content-center">
                                        <img src={pokemon.sprites.front_shiny} className="d-block w-20" alt={pokemon.sprites.front_shiny} />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="d-flex justify-content-center">
                                        <img src={pokemon.sprites.back_shiny} className="d-block w-20" alt={pokemon.sprites.back_shiny} />
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                        {/* Pokemon details */}
                        <div className="card-body text-left">
                            <div className="card-text">
                                <div className='row'>
                                    <div className='col'>
                                        <strong>Order:</strong><br />
                                        {pokemon.order}<br />
                                    </div>
                                    <div className='col'>
                                        <strong>Weight:</strong><br />
                                        {pokemon.weight}<br />
                                    </div>
                                    <div className='col'>
                                        <strong>Height:</strong><br />
                                        {pokemon.height}<br />
                                    </div>
                                </div><br />
                                <strong>Abilities:</strong><br />
                                <div className='row'>
                                    {pokemon.abilities.map(ability => {
                                        return (
                                            <div key={ability.ability.name} className="col-6 col-sm-4 col-md-3">
                                                {ability.ability.name}
                                            </div>
                                        )
                                    })}</div><br />
                                <strong>Moves:</strong><br />
                                <div className='row'>
                                    {pokemon.moves.map(move => {
                                        return (
                                            <div className='col-6 col-sm-4 col-md-3' key={move.move.name}>
                                                {move.move.name}
                                            </div>
                                        )
                                    })}
                                </div> <br />
                            </div>
                        </div>

                        {/* Pokemon types */}
                        <div className="card-footer text-muted text-center">
                            <p className="card-text">{pokemon.types.map(type => {
                                return (
                                    <span key={type.type.name} className="badge rounded-pill bg-info">{capitalize(type.type.name)}</span>
                                )
                            }
                            )}</p>
                        </div>
                    </div> <br />
                </div> : ""
            }
            {
                status === fetchStatus.PENDING ?
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> :
                    ""
            }
            {
                status === fetchStatus.FAILED ?
                    <p>Sorry, there was an error loading data.</p> :
                    ""
            }
            <div className='text-center'>
                <Link to="/" className='btn btn-primary'>Go back</Link>
            </div>
        </div>
    )
}

export default PokemonDetails