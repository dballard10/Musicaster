import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import SongDetailPage from "./pages/SongDetailPage";
import SongEditPage from "./pages/SongEditPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/song/:id",
        element: <SongDetailPage />,
      },
      {
        path: "/song_edit",
        element: <SongEditPage />,
      },
    ],
  },
]);

export default router;
