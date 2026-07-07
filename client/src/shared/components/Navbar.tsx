import { NavLink } from "react-router/internal/react-server-client";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      {" "}
      <figure>
        {/* <img src="/images/logo.png" alt="SpaceMaster" /> */}
        <h3>Space for Me</h3>
      </figure>
      <nav className="flex gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `  ${isActive ? "text-green-600 border-b-2 transition-colors animate-pulse" : "text-gray-600 border-b-0"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/spaces"
          className={({ isActive }) =>
            `  ${isActive ? "text-green-600 border-b-2 transition-colors animate-pulse" : "text-gray-600 border-b-0"}`
          }
        >
          spaces
        </NavLink>
        <NavLink
          to="/bookings"
          className={({ isActive }) =>
            `  ${isActive ? "text-green-600 border-b-2 transition-colors animate-pulse" : "text-gray-600 border-b-0"}`
          }
        >
          Bookings
        </NavLink>
      </nav>
      <div className="flex gap-4">
        <NavLink to="/auth/login" className="">
          Login
        </NavLink>
        <NavLink to="/auth/register" className="">
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
