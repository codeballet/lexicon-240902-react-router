import { ReactElement } from "react";
import { Protected } from "../components";

export function Stats(): ReactElement {
    return (
        <>
            <Protected />
            <h3>These are your Stats</h3>
        </>
    );
}
