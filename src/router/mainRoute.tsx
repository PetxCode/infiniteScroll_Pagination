import { createBrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage"

export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    }
])