import { ReactElement, useState } from "react";
import { Outlet } from "react-router-dom";
import { Nav } from ".";

export function App(): ReactElement {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    return (
        <>
            <Nav />
            <Outlet />
        </>
    );
}
