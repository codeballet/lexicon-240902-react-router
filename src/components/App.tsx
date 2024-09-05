import { ReactElement, useState } from "react";
import { Outlet } from "react-router-dom";
import { LoggedInContext } from "../context";
import { Nav } from ".";

export function App(): ReactElement {
    const [loggedIn, setLoggedIn] = useState<Boolean>(false);

    return (
        <LoggedInContext.Provider value={loggedIn}>
            <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Outlet />
        </LoggedInContext.Provider>
    );
}
