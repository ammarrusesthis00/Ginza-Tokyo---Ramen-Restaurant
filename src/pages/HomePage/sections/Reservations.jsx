export default function Reservations() {
  const locations = [
    {
      name: "Downtown Ramen Spot",
      hours: "11:00 AM - 10:00 PM",
      landmark: "Central Park",
      crowded: "High"
    },
    {
      name: "Riverside Ramen",
      hours: "12:00 PM - 11:00 PM",
      landmark: "Riverside Walk",
      crowded: "Medium"
    },
    {
      name: "Uptown Ramen Lounge",
      hours: "10:00 AM - 9:00 PM",
      landmark: "Main Square",
      crowded: "Low"
    }
  ];

  return (
    <section className="w-[90%] mx-auto max-w-6xl space-y-10 pb-24">
      <div className="space-y-1">
        <h2 className="text-white text-2xl md:text-3xl font-classy">
          Reserve Your Table
        </h2>
        <p className="text-gray-100 font-rope font-light max-w-[90ch]">
          Plan your visit to experience our premium ramen. Check our locations, hours, and make a reservation easily.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Locations & Hours */}
        <div className="space-y-6">
          <h3 className="text-white text-xl md:text-2xl font-classy">Our Locations & Hours</h3>
         {locations.map((loc, index) => (
  <div key={index} className="bg-[#0f0f0f] rounded-lg p-6 space-y-3">
    <div className="flex justify-between">
      <h4 className="text-white font-classy text-lg">{loc.name}</h4>
      <h3 className="text-white font-classy">{loc.hours}</h3>
    </div>
    <p className="text-gray-100 font-rope font-light"><span className="font-medium">Nearest landmark:</span> {loc.landmark}</p>
  </div>
))}
        </div>

        {/* Right: Reservation Form */}
        <div className="bg-[#0f0f0f] rounded-lg p-6 space-y-4">
          <h3 className="text-white text-xl md:text-2xl font-classy">Book Your Table</h3>
          <form className="space-y-4">
            <div>
              <label className="text-gray-100 font-rope font-light block mb-1">Name</label>
              <input type="text" className="w-full rounded-md p-2 bg-[#1b1b1b] text-white" placeholder="Your name" />
            </div>
            <div>
              <label className="text-gray-100 font-rope font-light block mb-1">Email</label>
              <input type="email" className="w-full rounded-md p-2 bg-[#1b1b1b] text-white" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-gray-100 font-rope font-light block mb-1">Phone</label>
              <input type="tel" className="w-full rounded-md p-2 bg-[#1b1b1b] text-white" placeholder="123-456-7890" />
            </div>
            <div>
              <label className="text-gray-100 font-rope font-light block mb-1">Date</label>
              <input type="date" className="w-full rounded-md p-2 bg-[#1b1b1b] text-white" />
            </div>
            <div>
              <label className="text-gray-100 font-rope font-light block mb-1">Time</label>
              <input type="time" className="w-full rounded-md p-2 bg-[#1b1b1b] text-white" />
            </div>
            <div>
              <label className="text-gray-100 font-rope font-light block mb-1">Guests</label>
              <input type="number" min="1" className="w-full rounded-md p-2 bg-[#1b1b1b] text-white" placeholder="Number of guests" />
            </div>
            <button className="bg-white text-black px-4 py-2 font-classy mt-2 cursor-pointer">
              Reserve Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}