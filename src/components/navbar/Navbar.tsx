import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { logIn, logOut } from "../../redux/pokemon/loginSlice"
import { RootState } from "../../redux/store"


const Navbar = () => {
    const { user } = useSelector((state: RootState) => state.login)
    const dispatch = useDispatch()

    const loginOut = () => {
        dispatch(logOut())
        console.log(user)
    }

    const loginIn = () => {
        dispatch(logIn("Someone"))
        console.log(user)
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Pokemons</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={user !== null ? "nav-link" : "nav-link disabled"} to="/">Pokemon List</Link>
                        </li>

                        {user == null ?
                            <li className="nav-item">
                                <button className='btn btn-light nav-link' onClick={loginIn}>Log in</button>
                                {/* <Link className="nav-link" to="/signin">Login</Link> */}
                            </li> :
                            <li className="nav-item">
                                <button className='btn btn-light nav-link' onClick={loginOut}>Log out</button>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar