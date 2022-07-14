import React from 'react'
import { allPokemonType, eachPokemonType } from '../../redux/pokemon/pokemonTypes'

interface IProps {
    pokemon: eachPokemonType
}

function capitalize(word: string):string {
    return word[0].toUpperCase() + word.substring(1)
}

const PokemonCard: React.FunctionComponent<IProps> = ({ pokemon }) => {
    return (
        <div className='col-sm-6 col-lg-4 col-xl-3 text-center p-2' key={pokemon.name}>
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