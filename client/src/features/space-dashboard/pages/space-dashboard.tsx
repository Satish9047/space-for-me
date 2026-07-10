import StatCard from "../components/statCard";
import {
  CalendarCheck,
  BanknoteArrowUp,
  Eclipse,
  Calendar,
} from "lucide-react";
import { BookingsTable } from "../components/BookingTable";
import SpaceCalendar from "../components/Calendar";
import Card from "@/shared/components/Card";

const SpaceDashboard = () => {
  const stats = [
    {
      id: 1,
      title: "Total Bookings",
      icon: <CalendarCheck />,
      data: 1128,
    },
    {
      id: 2,
      title: "Revenue (NRs)",
      icon: <BanknoteArrowUp />,
      data: 1128,
    },
    {
      id: 3,
      title: "Number of Space",
      icon: <Eclipse />,
      data: 3,
    },
    {
      id: 4,
      title: "Todays Bookings",
      icon: <Calendar />,
      data: 8,
    },
  ];

  const spaces = [
    {
      id: 1,
      name: "Futsal",
      image: "/images/futsal-thumbnail.avif",
      description: "Indoor and outdoor small-sided pitches available.",
      venues: 12,
      icon: "⚽",
    },
    {
      id: 2,
      name: "Basketball",
      image: "/images/basketball-thumbnail.avif",
      description: "Full-sized pro courts and community half-courts.",
      venues: 8,
      icon: "🏀",
    },
  ];
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Main */}
      <main className="ml-72 min-h-screen p-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <p className="text-gray-500">
            Manage your spaces and track performance
          </p>
        </div>
        <div className="flex gap-4 justify-between">
          {stats.map((stat) => {
            return <StatCard stat={stat} />;
          })}
        </div>
        <div className="flex gap-8">
          <BookingsTable />
          <SpaceCalendar />
        </div>

        <div className="flex gap-8">
          <div>
            <h2>My Spaces</h2>
            <div className="flex gap-4">
              {spaces.map((space) => {
                return <Card spaceInfo={space} />;
              })}
            </div>
          </div>
          <div>
            <p>Today's Match Schedule</p>
            <div>
              <BookingsTable />
            </div>
          </div>
        </div>

        {/* Rest of dashboard */}
      </main>
    </div>
  );
};

export default SpaceDashboard;
