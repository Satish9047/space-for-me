import AuthLayout from "../layouts/AuthLayout";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import SpaceMasterLayout from "../layouts/SpaceMasterLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        lazy: async () => {
          const { default: HomePage } =
            await import("../../features/home/pages/Home.page");
          return { Component: HomePage };
        },
      },
      {
        path: "spaces",
        lazy: async () => {
          const { default: SpacePage } =
            await import("../../features/home/pages/Space.page");
          return { Component: SpacePage };
        },
      },
      {
        path: "bookings",
        lazy: async () => {
          const { default: BookingPage } =
            await import("../../features/home/pages/Booking.page");
          return { Component: BookingPage };
        },
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        lazy: async () => {
          const { default: LoginPage } =
            await import("../../features/auth/pages/Login.Page");
          return { Component: LoginPage };
        },
      },
      {
        path: "register",
        lazy: async () => {
          const { default: RegisterPage } =
            await import("../../features/auth/pages/Register.Page");
          return { Component: RegisterPage };
        },
      },
      {
        path: "space-admin-login",
        lazy: async () => {
          const { default: SpaceMasterLogin } =
            await import("../../features/auth/pages/SpaceMasterLogin.Page");
          return { Component: SpaceMasterLogin };
        },
      },
    ],
  },
  {
    path: "space-dashboard",
    element: <SpaceMasterLayout />,
    children: [
      {
        path: "overview",
        lazy: async () => {
          const { default: OverviewPage } =
            await import("../../features/space-dashboard/pages/overview");
          return { Component: OverviewPage };
        },
      },
      {
        path: "calendar",
        lazy: async () => {
          const { default: CalendarPage } =
            await import("../../features/space-dashboard/pages/calendar");
          return { Component: CalendarPage };
        },
      },
      {
        path: "spaces",
        lazy: async () => {
          const { default: SpacesPage } =
            await import("../../features/space-dashboard/pages/spaces");
          return { Component: SpacesPage };
        },
      },
      {
        path: "finance",
        lazy: async () => {
          const { default: FinancePage } =
            await import("../../features/space-dashboard/pages/finance");
          return { Component: FinancePage };
        },
      },
      {
        path: "settings",
        lazy: async () => {
          const { default: SettingsPage } =
            await import("../../features/space-dashboard/pages/settings");
          return { Component: SettingsPage };
        },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
