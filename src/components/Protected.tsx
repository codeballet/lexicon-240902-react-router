import { Navigate } from "react-router-dom";
import { ILoggedInProps } from "../interfaces";

export function Protected({ loggedIn }: ILoggedInProps) {
    if (!loggedIn) {
        return <Navigate to="/" replace />;
    }
}
