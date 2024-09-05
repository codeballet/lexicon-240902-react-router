import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { App } from "./components";
import {
    About,
    Contact,
    Dashboard,
    Home,
    Notfound,
    Oldhome,
    Settings,
    Signup,
    Stats,
    Step1,
    Step2,
    Step3,
    UserProfile,
} from "./pages";

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
            <Route path="old-home" element={<Oldhome />} />
            <Route path="signup" element={<Signup />}>
                <Route path="step1" element={<Step1 />} />
                <Route path="step2" element={<Step2 />} />
                <Route path="step3" element={<Step3 />} />
            </Route>
            <Route path="user/:id" element={<UserProfile />} />
            <Route path="*" element={<Notfound />} />
        </Route>
    )
);
