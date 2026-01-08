import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
const router = createBrowserRouter ([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
            index: true,    
            path: '/',
            element: <Home></Home>
        },
        {
            path:'/allapps',
            element:<AllApps></AllApps>
        }
        ]
    }
])

export default router;