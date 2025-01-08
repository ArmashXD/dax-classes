// import { createBrowserRouter } from "react-router";
// import AboutPage from "../pages/about";
// import ErrorPage from "../pages/error-page";
// import HomePage from "../pages/home";
// import ProfilePage from "../pages/profile";

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <HomePage />,
//         errorElement: <ErrorPage />,
//     },
//     {
//         path: '/about',
//         element: <AboutPage />,
//         errorElement: <ErrorPage />,
//     },
//     {
//         path: '/profile/:id',
//         element: <ProfilePage />,
//         errorElement: <ErrorPage />,
//     },
// ]);

// export default router



import { createBrowserRouter } from "react-router";
import AboutPage from "../pages/about";
import ErrorPage from "../pages/error-page";
import HomePage from "../pages/home";
import ProfilePage from "../pages/profile";
import ProfilePosts from "../pages/profile-post";
import ProfileSettings from "../pages/profile-settings";
import Layout from '../components/layout.jsx';
import LayoutTwo from "../components/layout-two.jsx";


// example not intended to use in a production app

const guestRoutes = [{
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            element: <HomePage />,
        },
        {
            path: 'about',
            element: <AboutPage />,
        },
        {
            path: 'profile/:id',
            element: <ProfilePage />,
            children: [
                {
                    index: true,
                    element: <ProfilePosts />,
                },
                {
                    path: 'settings',
                    element: <ProfileSettings />,
                },
            ],
        },
    ],
}]

const authRoutes = [{
    path: '/layout-two',
    element: <LayoutTwo />,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            element: <HomePage />,
        },
        {
            path: 'about',
            element: <AboutPage />,
        },
        {
            path: 'profile/:id',
            element: <ProfilePage />,
            children: [
                {
                    index: true,
                    element: <ProfilePosts />,
                },
                {
                    path: 'settings',
                    element: <ProfileSettings />,
                },
            ],
        },
    ],
},]

const router = createBrowserRouter([
    ...guestRoutes,
    ...authRoutes
]);


export default router

