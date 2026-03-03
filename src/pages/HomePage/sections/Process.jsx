import image1 from "../../../assets/images/image1.webp";
import image2 from "../../../assets/images/image1.webp";
import image3 from "../../../assets/images/image1.webp";
import image4 from "../../../assets/images/image1.webp";

export default function Process() {
 const steps = [
  {
    img: image1,
    title: "Select Best Ingredients",
    description: "Only the freshest, high-quality ingredients make it into our bowls."
  },
  {
    img: image2,
    title: "Handcrafted Noodles",
    description: "Noodles are made daily with care for perfect texture and bite."
  },
  {
    img: image3,
    title: "Slow-Simmered Broth",
    description: "Our rich broths are simmered for hours to capture deep flavor."
  },
  {
    img: image4,
    title: "Artful Assembly",
    description: "Each bowl is plated beautifully, ready to delight your senses."
  }
];
  return (
    <section className="w-[90%] mx-auto max-w-6xl py-24 space-y-6">
        <div className="space-y-1">
            <h2 className="font-classy text-white text-2xl">Our Crafting Process</h2>
            <p className="text-gray-100 max-w-[90ch] font-rope">We pick the best ingredients and craft every bowl of ramen with care.</p>
        </div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start justify-items-center bg-black p-8 rounded-lg">
  {steps.map((step, i) => (
    <div
    key={i}
    className="lg:max-w-[90%] text-center space-y-4 flex flex-col items-center justify-between"
    >
     <div className="flex items-center space-x-0">
      <div className="w-18 h-[4px] via-[#2a2a2a] bg-gradient-to-r from-[#0f0f0f] to-[#1b1b1b]"></div>
  {/* Number Ball */}
  <div className="w-10 h-10 flex items-center justify-center 
                  rounded-full bg-gradient-to-r from-[#0f0f0f] via-[#2a2a2a] to-[#1b1b1b] 
                  text-white font-classy shadow-lg">
    {i + 1}
  </div>

  {/* Vertical Line */}
  <div className="w-18 h-[4px] via-[#2a2a2a] bg-gradient-to-r from-[#0f0f0f] to-[#1b1b1b]"></div>
</div>
      <img
        src={step.img}
        className="w-full rounded-lg"
      />
      <div className="flex flex-col items-center space-y-1">
        <h3 className="text-xl text-white font-classy">{step.title}</h3>
        <p className="text-sm text-gray-100 font-rope font-light">
          {step.description}
        </p>
      </div>
    </div>
  ))}
</div>
    </section>
  );
}