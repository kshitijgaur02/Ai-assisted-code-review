import { createBrowserRouter } from "react-router-dom";

import HomeRedirect from "../pages/HomeRedirect";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import AnalysisPage from "../pages/AnalysisPage";

import ProtectedRoute from "../routes/ProtectedRoutes";
import ProtectedLayout from "../layouts/ProtectedLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRedirect />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },

          {
            path: "/analyze",
            element: <AnalysisPage />,
          },
        ],
      },
    ],
  },
]);