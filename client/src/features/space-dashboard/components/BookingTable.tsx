import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const bookings = [
  {
    id: 1,
    Name: "Satish Prajapati",
    Space: "Fustal-1",
    Time: "8.00-9.00 AM",
    Status: "confirmed",
    paymentMethod: "online",
    payment: true,
  },
  {
    id: 2,
    Name: "Aarav Sharma",
    Space: "Fustal-2",
    Time: "9.00-10.00 AM",
    Status: "confirmed",
    paymentMethod: "Cash",
    payment: true,
  },
  {
    id: 3,
    Name: "Priya Karki",
    Space: "Fustal-3",
    Time: "10.00-11.00 AM",
    Status: "confirmed",
    paymentMethod: "online",
    payment: false,
  },
  {
    id: 4,
    Name: "Rohan Thapa",
    Space: "Fustal-1",
    Time: "11.00-12.00 AM",
    Status: "confirmed",
    paymentMethod: "online",
    payment: true,
  },
  {
    id: 5,
    Name: "Sita Gurung",
    Space: "Fustal-2",
    Time: "1.00-2.00 PM",
    Status: "confirmed",
    paymentMethod: "online",
    payment: true,
  },
  {
    id: 6,
    Name: "Nabin Bhandari",
    Space: "Fustal-3",
    Time: "2.00-3.00 PM",
    Status: "confirmed",
    paymentMethod: "online",
    payment: false,
  },
  {
    id: 7,
    Name: "Anisha Rai",
    Space: "Fustal-1",
    Time: "3.00-4.00 PM",
    Status: "confirmed",
    paymentMethod: "cash",
    payment: true,
  },
];

export function BookingsTable() {
  return (
    <Table className="w-full border rounded-md">
      <TableHeader>
        <TableRow>
          <TableHead className="w-30">Name</TableHead>
          <TableHead>Space</TableHead>
          <TableHead>Time</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookings.map((booking) => (
          <TableRow key={booking.id}>
            <TableCell className="font-medium">{booking.Name}</TableCell>
            <TableCell>{booking.Space}</TableCell>
            <TableCell>{booking.Time}</TableCell>
            <TableCell className="text-right">{booking.Status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
