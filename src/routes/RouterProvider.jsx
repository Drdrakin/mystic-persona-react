import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AvatarCreation from '../pages/AvatarCreation'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/creation",
        element: <AvatarCreation/>
    }
]) 

const Routes = () => {
    return <RouterProvider router={router}/>
}

export default Routes;