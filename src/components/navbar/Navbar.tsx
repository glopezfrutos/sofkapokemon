import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { logOut } from "../../redux/login/loginSlice"
import { RootState } from "../../redux/store"


const Navbar = () => {
    const { user } = useSelector((state: RootState) => state.login)
    const dispatch = useDispatch()

    const loginOut = () => {
        dispatch(logOut())
    }


    return (
        <nav className="navbar navbar-expand-md bg-light navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png"
                        width="25"
                        height="25" />
                </a>
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
                                <Link className="nav-link" to="/login">Log in</Link>
                            </li> :
                            <li className="nav-item" onClick={loginOut}>
                                <Link className='nav-link' to="/">Log out</Link>
                            </li>
                        }
                        {user == null ?
                            <li className="nav-item">
                                <Link className="nav-link" to="/signin">Sign in</Link>
                            </li> : ""}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar