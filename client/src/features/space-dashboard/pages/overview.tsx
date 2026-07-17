import StatCard from "../components/StatCard";
import {
  CalendarCheck,
  BanknoteArrowUp,
  Eclipse,
  Calendar,
} from "lucide-react";
import { BookingsTable } from "../components/BookingTable";
import SpaceCalendar from "../components/Calendar";
import Card from "@/shared/components/Card";

const OverviewPage = () => {
  const tableInfo = {
    numberOfHeading: 4,
    headings: [
      {
        id: 1,
        title: "Name",
        key: "name" as const,
        className: "w-30",
      },
      {
        id: 2,
        title: "Space",
        key: "space" as const,
        className: "",
      },
      {
        id: 3,
        title: "Time",
        key: "time" as const,
        className: "",
      },
      {
        id: 4,
        title: "Hour",
        key: "hour" as const,
        className: "",
      },
      {
        id: 5,
        title: "PaymentStatus",
        key: "paymentStatus" as const,
        className: "text-right",
      },
    ],
    data: [
      {
        id: 1,
        name: "Satish Prajapati",
        space: "Fustal-1",
        time: "8.00-9.00 AM",
        paymentMethod: "online",
        paypent: true,
        paymentStatus: "confirmed",
        playStptus: "Played",
        hour: 1,
      },
      {
        id: 2,
        name: "Aarav Sharma",
        space: "Fustal-2",
        time: "9.00-10.00 AM",
        paymentMethod: "Cash",
        paympnt: true,
        paymentStatus: "confirmed",
        playStapus: "Played",
        hour: 1,
      },
      {
        id: 3,
        name: "Priya Karki",
        space: "Fustal-3",
        time: "10.00-11.00 AM",
        paymentStatus: "confirmed",
        playStatus: "Played",
        paymentMethod: "online",
        payment: false,
        hour: 1,
      },
      {
        id: 4,
        name: "Rohan Thapa",
        space: "Fustal-1",
        time: "11.00-12.00 AM",
        paymentStatus: "confirmed",
        playStatus: "Played",
        ppaymentMethod: "online",
        payment: true,
        hour: 1,
      },
      {
        id: 5,
        name: "Sita Gurung",
        space: "Fustal-2",
        time: "1.00-2.00 PM",
        paymentStatus: "confirmed",
        playStatus: "Pending",
        paymentMethod: "online",
        payment: true,
        hour: 1,
      },
      {
        id: 6,
        name: "Nabin Bhandari",
        space: "Fustal-3",
        time: "2.00-3.00 PM",
        paymentStatus: "confirmed",
        playStatus: "Pending",
        paymentMethod: "online",
        payment: false,
        hour: 1,
      },
      {
        id: 7,
        name: "Anisha Rai",
        space: "Fustal-1",
        time: "3.00-4.00 PM",
        paymentStatus: "confirmed",
        playStatus: "Pending",
        paymentMethod: "cash",
        payment: true,
        hour: 1,
      },
    ],
  };

  const todayBookings = {
    numberOfHeading: 5,
    headings: [
      {
        id: 1,
        title: "Name",
        key: "name" as const,
        className: "w-30",
      },
      {
        id: 2,
        title: "Space",
        key: "space" as const,
        className: "",
      },
      {
        id: 3,
        title: "Time",
        key: "time" as const,
        className: "",
      },
      {
        id: 3,
        title: "Hour",
        key: "hour" as const,
        className: "",
      },
      {
        id: 4,
        title: "PaymentStatus",
        key: "paymentStatus" as const,
        className: "",
      },
      {
        id: 6,
        title: "Day",
        key: "day" as const,
        className: "",
      },
      {
        id: 5,
        title: "PlayStatus",
        key: "playStatus" as const,
        className: "text-right",
      },
    ],
    data: [
      {
        id: 1,
        name: "Satish Prajapati",
        space: "Fustal-1",
        time: "8.00-9.00 AM",
        paymentMethod: "online",
        payment: true,
        paymentStatus: "confirmed",
        playStatus: "playing",
        day: ["daily"],
        hour: 1,
      },
      {
        id: 2,
        name: "Aarav Sharma",
        space: "Fustal-2",
        time: "9.00-10.00 AM",
        paymentMethod: "Cash",
        payment: true,
        paymentStatus: "confirmed",
        playStatus: "Played",
        day: ["sunday"],
        hour: 1,
      },
      {
        id: 3,
        name: "Priya Karki",
        space: "Fustal-3",
        time: "10.00-11.00 AM",
        paymentStatus: "confirmed",
        playStatus: "Played",
        paymentMethod: "online",
        payment: false,
        day: ["sunday"],
        hour: 1,
      },
      {
        id: 4,
        name: "Rohan Thapa",
        space: "Fustal-1",
        time: "11.00-12.00 AM",
        paymentStatus: "confirmed",
        playStatus: "Played",
        paymentMethod: "online",
        payment: true,
        day: ["sunday"],
        hour: 1,
      },
      {
        id: 5,
        name: "Sita Gurung",
        space: "Fustal-2",
        time: "1.00-2.00 PM",
        paymentStatus: "confirmed",
        playStatus: "Pending",
        paymentMethod: "online",
        payment: true,
        day: ["sunday"],
        hour: 1,
      },
      {
        id: 6,
        name: "Nabin Bhandari",
        space: "Fustal-3",
        time: "2.00-3.00 PM",
        paymentStatus: "confirmed",
        playStatus: "Pending",
        paymentMethod: "online",
        payment: false,
        day: ["sunday"],
        hour: 1,
      },
      {
        id: 7,
        name: "Anisha Rai",
        space: "Fustal-1",
        time: "3.00-4.00 PM",
        paymentStatus: "confirmed",
        playStatus: "Pending",
        paymentMethod: "cash",
        payment: true,
        day: ["sunday"],
        hour: 1,
      },
    ],
  };

  const stats = [
    {
      id: 1,
      title: "Total Bookings",
      icon: <CalendarCheck />,
      data: 1128,
    },
    {
      id: 4,
      title: "Todays Bookings",
      icon: <Calendar />,
      data: 8,
    },
    {
      id: 4,
      title: "Total Visitor",
      icon: <Calendar />,
      data: 8,
    },
    {
      id: 4,
      title: "Today Visitor",
      icon: <Calendar />,
      data: 8,
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
          <div className="w-full">
            <p>Recent bookings</p>
            <BookingsTable tableInfo={tableInfo} />
          </div>
          <div>
            <p>Calendar</p>
            <SpaceCalendar />
          </div>
        </div>

        <div className="flex">
          <div className="w-full">
            <p>Today's Match Schedule</p>
            <div>
              <BookingsTable tableInfo={todayBookings} />
            </div>
          </div>
        </div>
        <div>
          <h2>My Spaces</h2>
          <div className="flex gap-4">
            {spaces.map((space) => {
              return <Card spaceInfo={space} />;
            })}
          </div>
        </div>

        {/* Rest of dashboard */}
      </main>
    </div>
  );
};

export default OverviewPage;
