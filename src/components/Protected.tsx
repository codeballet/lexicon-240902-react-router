import { Navigate } from "react-router-dom";
import { ReactElement, useContext } from "react";
import { LoggedInContext } from "../context";

export function Protected(): ReactElement | undefined {
    const loggedIn = useContext(LoggedInContext);

    if (!loggedIn) {
        return <Navigate to="/" replace />;
    }
}
