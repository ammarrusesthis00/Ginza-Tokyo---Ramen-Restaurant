import Image1 from "../../../assets/images/image1.webp";

export default function Experience() {
  const items = [
    {
      title: "Warm Interior",
      description: "Soft lighting create a calm atmosphere."
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
      <div className="space-y-3">
        <h3 className="text-yellow-400 text-xs font-light font-rope tracking-widest bg-gradient-to-br from-[#0f0f0f] via-[#262626] to-[#0f0f0f] inline-block rounded-full px-3 py-2 shadow-[0px_0px_3px_rgba(255,255,255,0.3)] p-4 bg-gray-800 text-white">OUR AMBIENCE</h3>
        <div className="space-y-2">
          <h2 className="text-white text-2xl md:text-3xl font-classy">The Experience</h2>
          <p className="text-gray-100 font-rope font-light max-w-[90ch]">
            Step inside a space designed for comfort, connection, and carefully crafted moments.
          </p>
        </div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2 items-center justify-items-center bg-black p-8 rounded-lg">
            {items.map((item, i) => ( 
              <div key={i} className="lg:max-w-[90%] text-center space-y-4 flex flex-col justify-between relative">
                  <img src={Image1} alt={item.name} className="w-full rounded-lg" />
                  <div className="space-y-1 absolute bottom-10 px-2">
                    <h3 className="text-xl text-white font-classy">{item.title}</h3>
                    <p className="text-base text-gray-100 font-rope font-light">
                        {item.description}
                    </p>
                  </div>
              </div>
            ))}
        </div>
    </section>
  );
}