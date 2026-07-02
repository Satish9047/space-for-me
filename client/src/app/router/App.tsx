import AuthLayout from "../layouts/AuthLayout";
import RegisterPage from "../../features/auth/pages/Register.Page";
import LoginPage from "../../features/auth/pages/Login.page";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
