import { ReactElement } from "react";
import { Link, NavLink } from "react-router-dom";

interface INavProps {
    loggedIn: Boolean;
    setLoggedIn: (loggedIn: Boolean) => void;
}

export function Nav({ loggedIn, setLoggedIn }: INavProps): ReactElement {
    return (
        <nav className="nav">
            <NavLink className="nav__link" to="/">
                <button className="nav__button">Home</button>
            </NavLink>
            <NavLink className="nav__link" to="/about">
                <button className="nav__button">About</button>
            </NavLink>
            <NavLink className="nav__link" to="/contact">
                <button className="nav__button">Contact</button>
            </NavLink>
            <NavLink className="nav__link" to="/dashboard">
                <button className="nav__button">Dashboard</button>
            </NavLink>
            <button
                className="nav__button"
                onClick={() => setLoggedIn(!loggedIn)}
            >
                {loggedIn ? "Logout" : "Login"}
            </button>
        </nav>
    );
}
