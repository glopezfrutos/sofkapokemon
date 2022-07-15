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
                        {/* Pictures */}
                        <h5 className="card-header text-center">{capitalize(pokemon.name)} </h5>

                        <div className="accordion text-center" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Front picture
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <img src={pokemon.sprites.front_default} className="img-fluid justify-content-center" />
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Shiny front picture
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <img src={pokemon.sprites.front_shiny} className="img-fluid justify-content-center" />
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Back picture
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <img src={pokemon.sprites.back_default} className="img-fluid justify-content-center" />
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Shiny back picture
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <img src={pokemon.sprites.back_shiny} className="img-fluid justify-content-center" />
                                    </div>
                                </div>
                            </div>
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