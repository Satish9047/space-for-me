import { useState } from "react";
import { Link } from "react-router";

const LoginPage = () => {
  const [registerAs, setRegisterAs] = useState("Player");
  return (
    <div className="w-full md:px-6">
      <div className="pb-5">
        <h2>Login for Space</h2>
        <p>start booking spaces</p>
      </div>
      <div className="pb-4">
        <p>Register as</p>
        <div className="flex gap-4 p-2 w-full bg-slate-200">
          <button
            className={`flex-1 py-4 rounded-md ${registerAs === "Player" ? "bg-white" : "bg-slate-200"}`}
            onClick={() => setRegisterAs("Player")}
          >
            Player
          </button>
          <button
            className={`flex-1 py-4 rounded-md ${registerAs === "Space Owner" ? "bg-white" : "bg-slate-200"}`}
            onClick={() => setRegisterAs("Space Owner")}
          >
            Space Owner
          </button>
        </div>
      </div>
      <div className="min-h-125">
        {registerAs === "Player" ? (
          <>
            <form action="" className="flex flex-col gap-2">
              <div className="flex flex-col ">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="text-6 py-3 px-4 border-2 border-slate-300 "
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="password">PASSWORD</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="text-6 py-3 px-4 border-2 border-slate-300 "
                />
              </div>
              <button type="submit" className="w-full py-4 my-4 bg-amber-300">
                Login to Account
              </button>
            </form>

            <div className="flex flex-col gap-4 py-4">
              <div className="flex items-center gap-4">
                <hr className="flex-1 border-slate-300" />

                <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  OR SIGN IN WITH
                </span>

                <hr className="flex-1 border-slate-300" />
              </div>

              <div className="flex gap-4 p-2 w-full">
                <button className="flex-1 py-4 border-2">Google</button>
                <button className="flex-1 py-4 border-2">Facebook</button>
              </div>
            </div>
            <div className="text-center">
              <p>
                Don't have an account? <Link to="/auth/register">Sign Up</Link>
              </p>
            </div>
          </>
        ) : (
          <div>
            <div className="pb-5">
              <h2>Your Space Name</h2>
            </div>
            <form action="">
              <div className="flex flex-col ">
                <label htmlFor="space-name">SPACE NAME</label>
                <input
                  type="text"
                  name="space-name"
                  id="space-name"
                  className="text-6 py-3 px-4 border-2 border-slate-300 "
                />
              </div>
            </form>
            <button type="submit" className="w-full py-4 my-4 bg-amber-300">
              Login to Your Space
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
