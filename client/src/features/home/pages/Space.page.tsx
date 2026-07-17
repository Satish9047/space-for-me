import FilterSidebar from "../../../shared/components/FilterSideBar";
import type { Venue } from "../../../types";
import VenueCard from "../../../shared/components/VenueCard";
import Container from "../../../shared/components/Container";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const SpacePage = () => {
  const venues: Venue[] = [
    {
      id: 1,
      name: "Elite Sports Hub",
      image: "/images/basketball-thumbnail.avif",
      location: "Baluwatar",
      price: 1200,
      catagory: "futsal",
      tags: ["Floodlights", "Showers"],
    },
    {
      id: 2,
      name: "Skyline Arena",
      image: "/images/boxing-thumbnail.avif",
      location: "Thamel",
      price: 800,
      catagory: "futsal",
      tags: ["Rooftop", "Cafe"],
    },
    {
      id: 3,
      name: "Everest Pitch",
      image: "/images/boxing-thumbnail.avif",
      location: "Lalitpur",
      price: 1000,
      catagory: "futsal",
      tags: ["Outdoor", "Parking"],
    },
    {
      id: 4,
      name: "Durbar Sports Center",
      image: "/images/feature.avif",
      location: "Durbarmarg",
      price: 1500,
      catagory: "futsal",
      tags: ["A/C Indoor", "Pro Coaches"],
    },
    {
      id: 5,
      name: "Victory Futsal",
      image: "/images/feature.avif",
      location: "Baneshwor",
      price: 900,
      catagory: "futsal",
      tags: ["Parking", "Changing Room"],
    },
    {
      id: 6,
      name: "Prime Turf",
      image: "/images/futsal-thumbnail.avif",
      location: "Koteshwor",
      price: 1100,
      catagory: "futsal",
      tags: ["Floodlights", "Cafe"],
    },
    {
      id: 7,
      name: "Goal Zone Arena",
      image: "/images/martialart-thumbnail.avif",
      location: "Maharajgunj",
      price: 950,
      catagory: "futsal",
      tags: ["Indoor", "Equipment Rental"],
    },
    {
      id: 8,
      name: "Champion Court",
      image: "/images/archery-thumbnail.avif",
      location: "Jawalakhel",
      price: 1300,
      catagory: "futsal",
      tags: ["Premium Turf", "Showers"],
    },
    {
      id: 9,
      name: "Arena 360",
      image: "/images/badminton-thumbnail.avif",
      location: "Kalanki",
      price: 850,
      catagory: "futsal",
      tags: ["Parking", "Snack Bar"],
    },
    {
      id: 10,
      name: "KickOff Sports",
      image: "/images/archery-thumbnail.avif",
      location: "Chabahil",
      price: 1150,
      catagory: "futsal",
      tags: ["Floodlights", "Locker Room"],
    },
    {
      id: 11,
      name: "Royal Arena",
      image: "/images/futsal-thumbnail.avif",
      location: "Boudha",
      price: 1400,
      catagory: "futsal",
      tags: ["Indoor", "Cafe"],
    },
    {
      id: 12,
      name: "Green Turf Kathmandu",
      image: "/images/futsal-thumbnail.avif",
      location: "Kapan",
      price: 1000,
      catagory: "futsal",
      tags: ["Changing Room", "Floodlights"],
    },
    {
      id: 13,
      name: "Urban Kick Arena",
      image: "/images/badminton-thumbnail.avif",
      location: "New Baneshwor",
      price: 1050,
      catagory: "futsal",
      tags: ["Indoor", "Parking"],
    },
    {
      id: 14,
      name: "Legends Futsal",
      image: "/images/basketball-thumbnail.avif",
      location: "Satdobato",
      price: 1250,
      catagory: "futsal",
      tags: ["Premium Turf", "Cafe"],
    },
  ];

  return (
    <Container className="flex gap-8 py-8">
      {/* Sidebar – sticky and fixed width */}
      <aside className="w-72 shrink-0 sticky top-4 h-fit">
        <FilterSidebar />
      </aside>

      {/* Main content – card grid */}
      <main className="flex-1 min-w-0">
        <div className="py-8 flex justify-between">
          <div className="w-2/4">Catagories selected</div>
          <Field orientation="horizontal" className="w-2/4">
            <Input
              type="search"
              placeholder="Search..."
              className="text-lg p-4 rounded-md outline "
            />
            <Button>Search</Button>
          </Field>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {venues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      </main>
    </Container>
  );
};

export default SpacePage;
