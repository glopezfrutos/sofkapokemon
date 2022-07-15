import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import PokemonDetails from './components/pokemons/PokemonDetails'
import Pokemons from './components/pokemons/Pokemons'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate replace to="/" />} />
                <Route path="/" element={<Pokemons />} />
                <Route path="/details/:pokemonOrder" element={<PokemonDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
