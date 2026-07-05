import AuthLayout from "../layouts/AuthLayout";
import RegisterPage from "../../features/auth/pages/Register.Page";
import LoginPage from "../../features/auth/pages/Login.Page";
import { createBrowserRouter, RouterProvider } from "react-router";
import SpaceMasterLogin from "../../features/auth/pages/SpaceMasterLogin.Page";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../../features/home/pages/Home.page";
import SpacePage from "../../features/home/pages/Space.page";
import BookingPage from "../../features/home/pages/Booking.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "spaces",
        element: <SpacePage />,
      },
      {
        path: "bookings",
        element: <BookingPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "space-admin-login",
        element: <SpaceMasterLogin />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
