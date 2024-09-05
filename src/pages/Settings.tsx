import { ReactElement } from "react";
import { Protected } from "../components";

export function Settings(): ReactElement {
    return (
        <>
            <Protected />
            <h3>These are your Settings</h3>
        </>
    );
}
