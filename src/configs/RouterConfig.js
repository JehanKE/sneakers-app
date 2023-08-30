import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import SneakerPage from "../pages/SneakerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sneaker",
    element: <SneakerPage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
