import type { Venue } from "../../types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  venue: Venue;
};

const VenueCard = ({ venue }: Props) => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35" /> */}
      <div className="absolute top-3 left-3 z-30">
        <Badge className="bg-[#5951B4] text-white border-0 rounded-md px-4 py-2 text-sm font-medium backdrop-blur-sm">
          {venue.catagory} {/* fallback for typo */}
        </Badge>
      </div>
      <img
        src={venue.image}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">NRs {venue.price}</Badge>
        </CardAction>
        <CardTitle>{venue.name}</CardTitle>
        <div>
          <CardDescription>
            {venue.tags.map((tag) => (
              <Badge variant="outline">{tag}</Badge>
            ))}
          </CardDescription>
        </div>
      </CardHeader>
      <CardFooter className="flex flex-row justify-between items-center">
        <Badge variant="ghost">{venue.location}</Badge>
        <Button className="">book Now</Button>
      </CardFooter>
    </Card>
  );
};

export default VenueCard;

// export default VenueCard;
// <div className="overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-lg transition">
//   <div className="relative">
//     <img src={venue.image} className="h-44 w-full object-cover" />
//     <span className="absolute left-3 top-3 rounded bg-[#5951B4] px-2 py-1 text-xs text-white">
//       FUTSAL
//     </span>
//   </div>
//   <div className="p-4">
//     <div className="flex justify-between">
//       <h3 className="font-semibold">{venue.name}</h3>
//     </div>
//     <div className="flex gap-2 mt-3 flex-wrap">
//       {venue.tags.map((tag) => (
//         <span key={tag} className="rounded bg-gray-100 px-2 py-1 text-xs">
//           {tag}
//         </span>
//       ))}
//     </div>
//     <div className="mt-5 flex items-center justify-between">
//       <p className="text-sm">
//         <span className="font-sans">NPR {venue.price}</span>
//         /hr
//       </p>
//       <Button className="rounded-md bg-[#A36800]">Book Now</Button>
//     </div>
//   </div>
// </div>;
