import Image1 from "../../../assets/images/image1.webp";

export default function Experience() {
  const items = [
    {
      title: "Warm Interior",
      description: "Soft lighting and natural wood tones create a calm atmosphere."
    },
    {
      title: "Crafted Coffee",
      description: "Every cup prepared with precision and quality beans."
    },
    {
      title: "Cozy Corners",
      description: "Comfortable seating designed for long conversations."
    },
    {
      title: "Modern Minimalism",
      description: "Clean design with subtle details and balanced space."
    }
  ];

  return (
    <section className="w-[90%] mx-auto max-w-6xl space-y-8 pb-26">
      <div className="space-y-2">
        <h2 className="text-white text-2xl md:text-3xl font-classy">The Experience</h2>
        <p className="text-gray-100 font-rope font-light max-w-[90ch]">
          Step inside a space designed for comfort, connection, and carefully crafted moments.
        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-items-center">
            {items.map((item, i) => (
              <div key={i} className="lg:max-w-[70%] text-center space-y-4 flex flex-col justify-between relative">
                  <img src={Image1} alt={item.name} className="w-full rounded-lg" />img
                  <div className="space-y-1 absolute bottom-10 px-2">
                    <h4 className="text-xl text-white font-classy">{item.title}</h4>
                    <p className="text-sm text-gray-100 font-rope font-light">
                        {item.description}
                    </p>
                  </div>
              </div>
            ))}
        </div>
    </section>
  );
}