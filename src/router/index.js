import { createBrowserRouter } from "react-router";
import AboutPage from "../pages/about";
import ErrorPage from "../pages/error-page";
import HomePage from "../pages/home";
import ProfilePage from "../pages/profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,

    },
    {
        path: '/about',
        element: <AboutPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/profile/:id',
        element: <ProfilePage />,
        errorElement: <ErrorPage />,
    },
]);

export default router