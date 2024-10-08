import { ReactElement } from "react";
import { Outlet, useParams } from "react-router-dom";

export function UserProfile(): ReactElement {
    const params = useParams();
    return (
        <>
            <h2 className="UserProfile">
                This is the profile for user "{params.id}"
            </h2>
            <Outlet />
        </>
    );
}
