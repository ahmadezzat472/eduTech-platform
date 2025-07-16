import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "./components/layout/Root";
import Loadable from "./components/utils/Loadable";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Client Pages
const ClientPages = {
  Home: lazy(() => import("@/pages/home")),
  LearningArea: lazy(() => import("@/pages/learning-area")),
  UserQuizzes: lazy(() => import("@/pages/User/index")),
  LearningAreaDetail: lazy(() => import("@/pages/course")),
  Quiz: lazy(() => import("@/pages/quiz")),
};

// Auth Pages
const AuthPages = {
  Login: lazy(() => import("@/pages/auth/login")),
  Register: lazy(() => import("@/pages/auth/register")),
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
        children: [
          {
            index: true,
            element: <Loadable Component={ClientPages.LearningArea} />,
          },
          {
            path: ":courseName",
            element: (
              <ProtectedRoute>
                <Loadable Component={ClientPages.LearningAreaDetail} />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: "learning-area/:courseName/:chapterName/quiz/:quizType",
        element: (
          <ProtectedRoute>
            <Loadable Component={ClientPages.Quiz} />
          </ProtectedRoute>
        ),
      },
      {
        path: "user-quizzes",
        element: (
          <ProtectedRoute>
            <Loadable Component={ClientPages.UserQuizzes} />,
          </ProtectedRoute>
        ),
      },
    ],
  },

  // Auth Routes
  {
    path: "/login",
    errorElement: <Loadable Component={AuthPages.RoutingError} />,
    element: <Loadable Component={AuthPages.Login} />,
  },
  {
    path: "/register",
    errorElement: <Loadable Component={AuthPages.RoutingError} />,
    element: <Loadable Component={AuthPages.Register} />,
  },
  {
    path: "/unauthorized",
    errorElement: <Loadable Component={AuthPages.RoutingError} />,
    element: <Loadable Component={AuthPages.Unauthorized} />,
  },

  // Not Found
  {
    path: "*",
    element: <Loadable Component={AuthPages.NotFound} />,
  },
]);

export default router;
