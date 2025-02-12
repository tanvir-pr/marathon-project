import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import Error from "./page/Error";
import HomePage from "./page/HomePage";
import Marathon from "./layout/Marathon";
import Dashboard from "./layout/Dashboard";
import AuthLayout from "./layout/AuthLayout";
import Login from "./page/Login";
import Registation from "./page/Registation";
import PrivateRoute from "./PrivateRouter";
import AddMarathon from "./page/Marathon/AddMarathon";
import MarathonDetails from "./page/Marathon/MarathonDetails";
import RegisterPage from "./page/Marathon/RegisterPage";
import MyApplypage from "./page/MyApplyPage";
import MyMarathonPage from "./page/MyMarathonPage";
import ContactUs from "./layout/ContactUs";
import AboutUs from "./layout/AboutUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
            },
            {
                path: "/marathon",
                element: <Marathon></Marathon>,
            },
            {
                path: "/marathon/:id",
                element: <MarathonDetails></MarathonDetails>,
                loader: ({ params }) => fetch(`https://marathon-tau.vercel.app/marathon/${params.id}`)
            },
            {
                path: "/registration/:id",
                element: <PrivateRoute><RegisterPage></RegisterPage></PrivateRoute>,
                loader: ({ params }) => fetch(`https://marathon-tau.vercel.app/marathon/${params.id}`)
            },
            {
                path: "/applypage",
                element: <PrivateRoute><MyApplypage></MyApplypage></PrivateRoute>,
            },
            {
                path: "/myMarathonPage",
                element: <PrivateRoute><MyMarathonPage></MyMarathonPage></PrivateRoute>,
            },
            {
                path: "/addMarathon",
                element: <PrivateRoute><AddMarathon></AddMarathon></PrivateRoute>,
            },
            {
                path: "/dashboard",
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
            },
            {
                path: "/contuctus",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/aboutus",
                element:<AboutUs></AboutUs>
            },
            {
                path: "auth",
                element: <AuthLayout></AuthLayout>,
                children: [
                    {
                        path: "/auth/login",
                        element: <Login></Login>,
                    },
                    {
                        path: "/auth/register",
                        element: <Registation></Registation>,
                    },
                ]
            },



        ]
    },




    {
        path: "*",
        element: <Error></Error>,
    },

])

export default router;