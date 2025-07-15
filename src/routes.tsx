import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "./components/layout/Root";
import Loadable from "./components/utils/Loadable";

const ClientPages = {
  Home: lazy(() => import("@/pages/home")),
  LearningArea: lazy(() => import("@/pages/learning-area")),
  Quiz: lazy(() => import("@/pages/quiz")),
};

// ** Auth Pages
const AuthPages = {
  Login: lazy(() => import("@/pages/auth/login")),
  RoutingError: lazy(() => import("@/pages/auth/RoutingError")),
  Unauthorized: lazy(() => import("@/pages/auth/Unauthorized")),
  NotFound: lazy(() => import("@/pages/auth/NotFound")),
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Loadable Component={AuthPages.RoutingError} />,
    children: [
      {
        index: true,
        element: <Loadable Component={ClientPages.Home} />,
      },
      {
        path: "learning-area",
        element: <Loadable Component={ClientPages.LearningArea} />,
      },
      {
        path: "quiz",
        element: <Loadable Component={ClientPages.Quiz} />,
      },
    ],
  },

  // ** Auth
  {
    path: "/login",
    errorElement: <Loadable Component={AuthPages.RoutingError} />,
    element: <Loadable Component={AuthPages.Login} />,
  },

  // ** Unauthorized
  {
    path: "/unauthorized",
    errorElement: <Loadable Component={AuthPages.RoutingError} />,
    element: <Loadable Component={AuthPages.Unauthorized} />,
  },

  // ** Not Found
  {
    path: "*",
    element: <Loadable Component={AuthPages.NotFound} />,
  },
]);

export default router;
