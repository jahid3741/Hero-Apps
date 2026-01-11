import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import AppsDetails from "../Pages/AppsDetails";
import ErrorPage from "../Pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allapps",
        element: <AllApps></AllApps>,
      },
      {
        path: "/appdetails/:id",
        element: <AppsDetails></AppsDetails>,
      },
    ],
  },
]);

export default router;
