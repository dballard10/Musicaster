import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import TrackDetailPage from "./pages/TrackDetailPage";
import NewTrackPage from "./pages/NewTrackPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/tracks/:id",
        element: <TrackDetailPage />,
      },
      {
        path: "/new-track",
        element: <NewTrackPage />,
      },
    ],
  },
]);

export default router;
