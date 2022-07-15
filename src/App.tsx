import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import PokemonDetails from './components/pokemons/PokemonDetails'
import Pokemons from './components/pokemons/Pokemons'
import { RootState } from './redux/store'

function App() {
    const { user } = useSelector((state: RootState) => state.login)

    return (
        <BrowserRouter>
            <Navbar />
            {user !== null ?
                <Routes>
                    <Route path="*" element={<Navigate replace to="/" />} />
                    <Route path="/" element={<Pokemons />} />
                    <Route path="/details/:pokemonOrder" element={<PokemonDetails />} />
                </Routes> :
                <p className='m-3'>Please login to see the Pokemon List</p>
            }
            <footer className="navbar bg-light p-3">Sofka Pokemons Challenge</footer>
        </BrowserRouter>
    )
}

export default App
