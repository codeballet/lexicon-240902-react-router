import { ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";

export function Signup(): ReactElement {
    return (
        <>
            <h2 className="signup">Sign up here</h2>
            <Link to="/signup/step1">
                <button>Start</button>
            </Link>
            <Outlet />
        </>
    );
}
