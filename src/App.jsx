import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Dashboard from "./pages/Dashboard";
import FilesPage from "./pages/FilesPage";
import RecentPage from "./pages/RecentPage";
import TrashPage from "./pages/TrashPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/files",
        element: <FilesPage />,
      },
      {
        path: "/recent",
        element: <RecentPage />,
      },
      {
        path: "/trash",
        element: <TrashPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
