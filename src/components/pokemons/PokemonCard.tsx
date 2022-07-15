import React from 'react'
import { useNavigate } from 'react-router-dom'
import { eachPokemonType } from '../../redux/pokemon/pokemonTypes'
import { capitalize } from '../../shared/capitalize'

interface IProps {
    pokemon: eachPokemonType
}


const PokemonCard: React.FunctionComponent<IProps> = ({ pokemon }) => {
    const navigate = useNavigate();

    return (
        <div className='col-sm-6 col-lg-4 col-xl-3 text-center p-2' key={pokemon.name} onClick={() => {
            navigate('/details/' + pokemon.order)
        }} >
            <div className="card" style={{ width: "18rem" }}>
                <div className='text-center'>
                    <img src={pokemon.sprites.front_default} className="img-fluid justify-content-center" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{capitalize(pokemon.name)}
                    </h5>
                </div>
                <div className="card-footer text-muted">
                    <p className="card-text">{pokemon.types.map(type => {
                        return (
                            <span key={type.type.name} className="badge rounded-pill bg-info">{capitalize(type.type.name)}</span>
                        )
                    }
                    )}</p>
                </div>
            </div>
        </div>)
}

export default PokemonCard