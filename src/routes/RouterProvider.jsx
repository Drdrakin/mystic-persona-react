import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "../pages/Landing";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AvatarCreation from '../pages/AvatarCreation'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing/>
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