import { Outlet } from "react-router";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import {
  PanelsTopLeft,
  CalendarDays,
  Eclipse,
  Landmark,
  Settings,
} from "lucide-react";

const SpaceMasterLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 flex w-72 flex-col border-r bg-white">
        {/* Logo */}
        <div className="border-b p-6">
          <h2 className="text-2xl font-bold">Space</h2>
        </div>

        {/* User */}
        <div className="flex items-center gap-3 p-6">
          <img src="" alt="" className="h-12 w-12 rounded-full bg-gray-300" />

          <div>
            <p className="font-semibold">Bhaktapur Futsal </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 px-4">
          <div className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white">
            <PanelsTopLeft size={20} />
            <NavLink to="/space-dashboard/overview">Overview</NavLink>
          </div>

          <div className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white">
            <CalendarDays size={20} />
            <NavLink to="/space-dashboard/calendar">Calendar</NavLink>
          </div>

          <div className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white">
            <Eclipse size={20} />
            <NavLink to="/space-dashboard/spaces">Spaces</NavLink>
          </div>

          <div className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white">
            <Landmark size={20} />
            <NavLink to="/space-dashboard/finance">Finance</NavLink>
          </div>

          <div className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white">
            <Settings size={20} />
            <NavLink to="/space-dashboard/settings">Settings</NavLink>
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t p-4">
          <div className="flex items-center gap-3 p-6">
            <img src="" alt="" className="h-12 w-12 rounded-full bg-gray-300" />

            <div>
              <p className="font-semibold">Satish Prajapati</p>
              <p className="text-sm text-gray-500">Space Owner</p>
            </div>
          </div>
          <Button className="mb-2 w-full">Profile</Button>

          <Button variant="outline" className="w-full">
            Logout
          </Button>
        </div>
      </aside>

      {/* Main */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default SpaceMasterLayout;
