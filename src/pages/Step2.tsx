import { FormEvent, ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Step2(): ReactElement {
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault;
        console.log(e);
        navigate("/signup/step3");
    };

    return (
        <>
            <Link to="/signup/step1">
                <button>Back</button>
            </Link>
            <Link to="/signup/step3">
                <button>Next</button>
            </Link>
            <h3 className="step__h3">Enter payment details</h3>
            <form onSubmit={handleSubmit}>
                <input
                    id="payment"
                    name="payment"
                    placeholder="Payment details"
                    type="number"
                />
                <button type="submit">Save</button>
            </form>
        </>
    );
}
