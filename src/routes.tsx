import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "./components/layout/Root";
import Loadable from "./components/utils/Loadable";

const ClientPages = {
  Home: lazy(() => import("@/pages/home")),
  About: lazy(() => import("@/pages/About")),
  Contact: lazy(() => import("@/pages/ContactUs")),
  LearningArea: lazy(() => import("@/pages/learning-area")),
  LearningAreaDetail: lazy(() => import("@/pages/course")),
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
        path: "about",
        element: <Loadable Component={ClientPages.About} />,
      },
      {
        path: "contact",
        element: <Loadable Component={ClientPages.Contact} />,
      },
      {
        path: "learning-area",
        children: [
          {
            index: true,
            element: <Loadable Component={ClientPages.LearningArea} />,
          },
          {
            path: ":id",
            element: <Loadable Component={ClientPages.LearningAreaDetail} />,
          },
        ],
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
