import Container from "../../../shared/components/Container";
import Card from "../../../shared/components/Card";

const HomePage = () => {
  const spaces = [
    { id: 1, spaceCategory: "Futsal" },
    { id: 2, spaceCategory: "Basketball" },
    { id: 3, spaceCategory: "Tennis" },
    { id: 4, spaceCategory: "Badminton" },
    { id: 5, spaceCategory: "Volleyball" },
    { id: 6, spaceCategory: "Archery" },
    { id: 7, spaceCategory: "Swimming Pool" },
    { id: 8, spaceCategory: "Zip Line" },
    { id: 9, spaceCategory: "Rock Climbing" },
    { id: 10, spaceCategory: "Paintball" },
    { id: 15, spaceCategory: "Mini Golf" },
    { id: 16, spaceCategory: "Bowling" },
    { id: 21, spaceCategory: "Boxing Ring" },
    { id: 22, spaceCategory: "Martial Arts Dojo" },
    { id: 23, spaceCategory: "Dance Studio" },
    { id: 24, spaceCategory: "Yoga Studio" },
    { id: 25, spaceCategory: "Studio" },
    { id: 26, spaceCategory: "Seminar Hall" },
    { id: 27, spaceCategory: "Conference Room" },
    { id: 28, spaceCategory: "Auditorium" },
    { id: 29, spaceCategory: "Theater" },
    { id: 30, spaceCategory: "Music Studio" },
    { id: 31, spaceCategory: "Art Studio" },
    { id: 32, spaceCategory: "Photography Studio" },
    { id: 33, spaceCategory: "Recording Studio" },
    { id: 34, spaceCategory: "Podcast Studio" },
    { id: 35, spaceCategory: "Dance Hall" },
    { id: 36, spaceCategory: "Banquet Hall" },
    { id: 37, spaceCategory: "Exhibition Hall" },
    { id: 38, spaceCategory: "Event Space" },
    { id: 39, spaceCategory: "Coworking Space" },
  ];

  const sports = [
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
    {
      id: 3,
      name: "Tennis",
      image: "/images/tabletennis-thumbnail.avif",
      description: "Clay, grass and hard court surfaces available.",
      venues: 15,
      icon: "🎾",
    },
    {
      id: 4,
      name: "Boxing",
      image: "/images/boxing-thumbnail.avif",
      description: "Professional boxing gyms and training facilities.",
      venues: 24,
      icon: "🥊",
    },
    {
      id: 5,
      name: "Martial Arts",
      image: "/images/martialart-thumbnail.avif",
      description: "Dojos for various martial arts disciplines.",
      venues: 18,
      icon: "🥋",
    },
    {
      id: 6,
      name: "Archery",
      image: "/images/archery-thumbnail.avif",
      description: "Target practice and competitive archery facilities.",
      venues: 10,
      icon: "🏹",
    },
    {
      id: 7,
      name: "Swimming",
      image: "/images/swimming-thumbnail.avif",
      description: "Indoor and outdoor swimming pools for all levels.",
      venues: 14,
      icon: "🏊",
    },
    {
      id: 8,
      name: "Volleyball",
      image: "/images/volleyball-thumbnail.avif",
      description: "Indoor and beach volleyball courts available.",
      venues: 9,
      icon: "🏐",
    },
    {
      id: 9,
      name: "Badminton",
      image: "/images/badminton-thumbnail.avif",
      description: "Indoor courts for singles and doubles play.",
      venues: 11,
      icon: "🏸",
    },
  ];

  return (
    <>
      <section className="relative min-h-[90vh] overflow-hidden mb-8">
        {/* Background Image */}
        <img
          src="/images/main-hero.avif"
          alt="Futsal players"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/20" />

        {/* Content */}
        <Container className="relative flex min-h-[90vh] items-center justify-center">
          <div className="max-w-6xl space-y-4">
            <h2 className="font-sans text-4xl font-bold leading-tight text-white lg:text-6xl">
              Find, Book Spaces And Play
            </h2>
            <div className="flex items-center gap-3 border-slate-200">
              <select className="w-full font-sans appearance-none p-4 outline-none bg-white rounded-md">
                {spaces.map((space) => (
                  <option key={space.id} className="py-2">
                    {space.spaceCategory}
                  </option>
                ))}
              </select>
              <button className="mx-2 flex items-center gap-2 rounded-md bg-amber-400 px-8 py-4 font-heading text-slate-900 transition hover:bg-amber-500">
                Select
              </button>
            </div>
          </div>
        </Container>
      </section>
      <Container>
        <div>
          <h2>Browse by Sports</h2>
          <p>Find your perfect space</p>
        </div>
        <div className="grid grid-cols-5  gap-4 py-4">
          {sports.map((sport) => {
            return <Card spaceInfo={sport} />;
          })}
        </div>
      </Container>
      <Container>
        <div className="flex justify-between items-center gap-6 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col justify-around gap-5 h-full text-left md:max-w-md lg:max-w-xl text-white">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-wider">
                Manage Your Own Space?
              </h2>
              <p className="text-base md:text-lg font-light text-purple-100 leading-relaxed">
                Join 500+ venue owners who use our space to streamline bookings
                and grow their community.
              </p>
            </div>
            <button className="px-8 py-4 bg-white rounded-xl text-purple-700 font-semibold text-sm md:text-base shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 w-fit flex items-center gap-2">
              Partner With Us
            </button>
          </div>
          <figure className="max-w-md object-cover overflow-hidden rounded-2xl shadow-inner ring-1 ring-white/20">
            <img
              src="/images/feature.avif"
              alt="Featured Space"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
