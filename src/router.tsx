import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { App } from "./components";
import { About, Contact, Dashboard, Home, Settings, Stats } from "./pages";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />} path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="dashboard" element={<Dashboard />}>
                <Route path="settings" element={<Settings />} />
                <Route path="stats" element={<Stats />} />
            </Route>
        </Route>
    )
);
