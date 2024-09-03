import { ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";

export function Dashboard(): ReactElement {
    return (
        <>
            <h2 className="dashboard">This is the Dashboard</h2>
            <p>
                Show me the <Link to="/dashboard/settings">Settings</Link>
            </p>
            <p>
                Show me the <Link to="/dashboard/stats">Stats</Link>
            </p>
            <Outlet />
        </>
    );
}
