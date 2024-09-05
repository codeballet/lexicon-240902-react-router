import { FormEvent, ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Step1(): ReactElement {
    const navigate = useNavigate();
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault;
        console.log(e);
        navigate("/signup/step2");
    };

    return (
        <>
            <Link to="/signup">
                <button>Back</button>
            </Link>
            <Link to="/signup/step2">
                <button>Next</button>
            </Link>
            <h3 className="step__h3">Enter username</h3>
            <form onSubmit={handleSubmit}>
                <input
                    autoFocus
                    id="username"
                    name="username"
                    placeholder="Username"
                    type="text"
                />
                <button type="submit">Save</button>
            </form>
        </>
    );
}
