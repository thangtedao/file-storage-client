import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Dashboard from "./pages/Dashboard";
import FilesPage from "./pages/FilesPage";
import RecentPage from "./pages/RecentPage";
import TrashPage from "./pages/TrashPage";
import ErrorPage from "./pages/ErrorPage";
import FileSharePage from "./pages/FileSharePage";
import SearchPage from "./pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "files",
        element: <FilesPage />,
      },
      {
        path: "recent",
        element: <RecentPage />,
      },
      {
        path: "trash",
        element: <TrashPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "/share",
    element: <FileSharePage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
