import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { LoggedInContext } from "../context";

export function Protected() {
    const loggedIn = useContext(LoggedInContext);

    if (!loggedIn) {
        return <Navigate to="/" replace />;
    }
}
