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
import LoginPage from "./pages/LoginPage";

import { loader as rootLoader } from "./pages/Root";
import { loader as filesLoader } from "./pages/FilesPage";
import { loader as trashLoader } from "./pages/TrashPage";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "files",
        element: <FilesPage />,
        loader: filesLoader,
      },
      {
        path: "recent",
        element: <RecentPage />,
      },
      {
        path: "trash",
        element: <TrashPage />,
        loader: trashLoader,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
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
