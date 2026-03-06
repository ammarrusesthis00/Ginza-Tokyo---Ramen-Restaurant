export default function Statistics() {
  const stats = [
    { value: "10k+", label: "Ramen bowls served" },
    { value: "500+", label: "Happy customers" },
    { value: "8", label: "Years in business" },
    { value: "4", label: "Signature ramen recipes" },
  ];

  return (
    <section className="py-36 w-[90%] mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row gap-0 justify-center">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex-1 group bg-black hover:bg-black/30 transition-colors duration-500 py-16 flex flex-col items-center cursor-pointer shadow-md"
          >
            <span className="font-classy text-3xl text-white group-hover:text-yellow-500">{stat.value}</span>
            <span className="font-light text-gray-300 mt-2 text-center group-hover:text-yellow-500/80">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}