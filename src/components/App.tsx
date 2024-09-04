import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Nav } from ".";

export function App(): ReactElement {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    );
}
