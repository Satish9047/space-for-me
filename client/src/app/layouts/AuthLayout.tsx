import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <main className="min-h-screen lg:grid lg:grid-cols-6">
      {/* Left */}
      <section className="flex min-h-screen flex-col justify-between p-8 lg:col-span-2">
        <header className="text-2xl font-bold">Space</header>

        <div className="flex flex-1 items-center justify-center py-8 sm:py-10">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>

        <footer className="pt-8 text-center text-sm text-slate-600">
          <p>&copy; 2026 Space. All rights reserved.</p>
        </footer>
      </section>

      {/* Right */}
      <section className="relative hidden overflow-hidden lg:col-span-4 lg:block">
        <img
          src="/images/signup-hero.avif"
          alt="Join the Space Community"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-2xl rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl">
            <h3 className="mb-4 font-heading text-4xl font-bold text-white">
              Join the Space Community
            </h3>

            <p className="leading-7 text-white/90">
              Discover, book and play. Discover wonderful venues and courts to
              play, compete, and celebrate with friends.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
