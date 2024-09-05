import { useParams } from "react-router-dom";

export function UserProfile() {
    const params = useParams();
    return (
        <>
            <h2 className="UserProfile">
                This is the profile for user "{params.id}"
            </h2>
        </>
    );
}
