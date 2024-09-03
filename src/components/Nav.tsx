import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function Nav(): ReactElement {
    return (
        <nav className="nav">
            <Link className="nav__link" to="/">
                <button className="nav__button">Home</button>
            </Link>
            <Link className="nav__link" to="/about">
                <button className="nav__button">About</button>
            </Link>
            <Link className="nav__link" to="/contact">
                <button className="nav__button">Contact</button>
            </Link>
            <Link className="nav__link" to="/dashboard">
                <button className="nav__button">Dashboard</button>
            </Link>
        </nav>
    );
}
