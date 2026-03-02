export default function Statistics() {
     const stats = [
        { value: "10k+", label: "Ramen bowls served" },
        { value: "500+", label: "Happy customers" },
        { value: "8", label: "Years in business" },
        { value: "4", label: "Signature ramen recipes" },
      ];
    return (
        <section>
            <div className="md:flex-row flex-col md:justify-center flex gap-8 text-gray-100 py-36">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <span className="font-classy text-3xl">{stat.value}</span>
                  <span className="font-light">{stat.label}</span>
                </div>
              ))}
            </div>
        </section>
    )
}