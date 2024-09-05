import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function Step3(): ReactElement {
    return (
        <>
            <Link to="/signup/step2">
                <button>Back</button>
            </Link>
            <Link to="/dashboard">
                <button>Done</button>
            </Link>
            <h3 className="step__h3">Summary</h3>
        </>
    );
}
