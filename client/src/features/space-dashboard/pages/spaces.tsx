import { NavLink, Outlet } from "react-router";
import { Eclipse } from "lucide-react";

const SpacesPage = () => {
  const spaceLinks = [
    {
      id: 1,
      spaceName: "Bhaktapur Futsal Club 1",
      path: "/space-dashboard/spaces/1",
    },
    {
      id: 2,
      spaceName: "Bhaktapur Futsal Club 2",
      path: "/space-dashboard/spaces/2",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Main */}
      <main className="ml-72 min-h-screen p-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Spaces</h1>
          <p className="text-gray-500">Your spaces</p>
        </div>

        <div className="flex gap-4 justify-between">
          {spaceLinks.map((item) => {
            return (
              <div
                className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white"
                key={item.id}
              >
                <Eclipse size={20} />
                <NavLink to={item.path}>{item.spaceName}</NavLink>
              </div>
            );
          })}
        </div>
        <div>
          <Outlet />
        </div>
        {/* Rest of dashboard */}
      </main>
    </div>
  );
};

export default SpacesPage;
