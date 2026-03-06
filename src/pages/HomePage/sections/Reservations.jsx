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
    <section className="w-[90%] mx-auto max-w-6xl space-y-10 pb-24" id="reservation">
      <div className="space-y-3">
  <h3 className="text-yellow-400 text-xs font-light font-rope tracking-widest bg-gradient-to-br from-[#0f0f0f] via-[#262626] to-[#0f0f0f] inline-block rounded-full px-3 py-2 shadow-[0px_0px_3px_rgba(255,255,255,0.3)] p-4 bg-gray-800 text-white">
    JOIN US TODAY
  </h3>
  <div className="space-y-2">
    <h2 className="text-white text-2xl md:text-3xl font-classy">
      Reserve Your Table
    </h2>
    <p className="text-gray-100 font-rope font-light max-w-[90ch]">
      Plan your visit to experience our premium ramen. Check our locations, hours, and make a reservation easily.
    </p>
  </div>
</div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Locations & Hours */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-white text-xl md:text-2xl font-classy">Our Locations & Hours</h3>
              <p className="text-gray-100 font-rope font-light max-w-[90ch]">
                Visit any of our locations to enjoy freshly prepared ramen. We welcome walk-ins and reservations alike.
              </p>
          </div>
         {locations.map((loc, index) => (
  <div
    key={index}
    className="bg-gradient-to-b from-[#0f0f0f] to-[#161616] rounded-lg p-8 space-y-4"
  >
    <p className="text-[11px] tracking-widest text-gray-400 font-rope uppercase">
      Location
    </p>

    <div className="flex justify-between items-start">
      <h4 className="text-white font-classy text-lg">{loc.name}</h4>
      <span className="text-gray-300 font-rope text-sm">{loc.hours}</span>
    </div>

    <div className="h-[1px] bg-[#262626]" />

    <p className="text-gray-100 font-rope font-light text-sm">
      <span className="text-gray-400">Nearest landmark:</span> {loc.landmark}
    </p>
  </div>
))}
        </div>

        {/* Right: Reservation Form */}
        <div className="bg-[#0f0f0f] rounded-lg p-6 space-y-4">
          <h3 className="text-white text-xl md:text-2xl font-classy">Book Your Table</h3>
      <form
  action="https://formspree.io/f/xwvrekrg"
  method="POST" className="space-y-4">
            <div>
              <label className="text-gray-100 font-rope font-light block mb-1">Name</label>
              <input type="text" name="name" className="w-full rounded-md p-2 bg-[#1b1b1b] text-white" placeholder="Your name" />
            </div>
            <div>
              <label className="text-gray-100 font-rope font-light block mb-1">Email</label>
              <input type="email" name="email" className="w-full rounded-md p-2 bg-[#1b1b1b] text-white" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-gray-100 font-rope font-light block mb-1">Phone</label>
              <input type="tel" name="telephone" className="w-full rounded-md p-2 bg-[#1b1b1b] text-white" placeholder="123-456-7890" />
            </div>
            <div>
              <label className="text-gray-100 font-rope font-light block mb-1">Date</label>
              <input type="date" name="date" className="w-full rounded-md p-2 bg-[#1b1b1b] text-white" />
            </div>
            <div>
              <label className="text-gray-100 font-rope font-light block mb-1">Time</label>
              <input type="time" name="time" className="w-full rounded-md p-2 bg-[#1b1b1b] text-white" />
            </div>
            <div>
              <label className="text-gray-100 font-rope font-light block mb-1">Guests</label>
              <input type="number" name="people" min="1" className="w-full rounded-md p-2 bg-[#1b1b1b] text-white" placeholder="Number of guests" />
            </div>
            <button type="submit" className="bg-white text-black px-4 py-2 font-classy mt-2 cursor-pointer">
              Reserve Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}