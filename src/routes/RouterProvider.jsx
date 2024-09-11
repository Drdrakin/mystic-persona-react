import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/register",
        element: <Register/>
    },

]) 

const Routes = () => {
    return <RouterProvider router={router}/>
}

export default Routes;