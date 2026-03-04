export default function Reviews() {
  const reviews = [
    {
      text: "The ambiance was perfect. Every detail felt thoughtfully designed, making it a truly relaxing experience.",
      name: "Sarah L.",
      occupation: "Interior Designer"
    },
    {
      text: "I loved how inviting and cozy the space felt. A perfect place to work, meet friends, or just unwind.",
      name: "Michael K.",
      occupation: "Photographer"
    },
    {
      text: "Every visit is a delight. Comfortable, stylish, and full of character—highly recommend to anyone!",
      name: "Lena R.",
      occupation: "Writer"
    }
  ];

  return (
    <section className="w-[90%] mx-auto max-w-6xl space-y-8 pb-24">
      <div className="space-y-1">
        <h2 className="text-white text-2xl md:text-3xl font-classy">
          What Our Guests Say
        </h2>
        <p className="text-gray-100 font-rope font-light max-w-[90ch]">
          Hear from people who have experienced our space—where comfort, connection, and memorable moments come together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gradient-to-br from-[#0f0f0f] via-[#2c2c2c2e] to-[#1b1b1b] rounded-lg p-8 space-y-4">
            <p className="text-gray-100 italic font-normal">{review.text}</p>
            <div className="justify-self-end text-right">
              <h3 className="text-white font-classy text-lg">{review.name}</h3>
              <h4 className="text-white font-rope font-light text-md">{review.occupation}</h4>
            </div>
          </div>
        ))}
      </div>
      
    </section>
    
  );
}