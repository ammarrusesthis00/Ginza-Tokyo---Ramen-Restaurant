import image1 from "../../../assets/images/image1.webp"

export default function Menu() {
const sections = [
  {
    title: "Signature Ramen",
     japName: "看板ラーメン",
    id: "ramen",
    description: "Our most celebrated bowls, crafted with slow-simmered broths and traditional Japanese techniques.",
    items: [
      {
        name: "Vegetable Ramen",
        price: { usd: "$14", yen: "¥2,000" },
        description: "Rich vegetable broth, house-made noodles, marinated egg, fresh mushrooms, and scallions."
      },
      {
        name: "Shoyu Ramen",
        price: { usd: "$13", yen: "¥1,850" },
        description: "Clear chicken-free soy broth, bamboo shoots, nori, scallions, and tofu slices."
      },
      {
        name: "Miso Ramen",
        price: { usd: "$15", yen: "¥2,150" },
        description: "Deep miso-infused broth, sweet corn, butter, bean sprouts, and thick curly noodles."
      },
      {
        name: "Spicy Sesame Ramen",
        price: { usd: "$16", yen: "¥2,300" },
        description: "Savory sesame broth with chili oil, bok choy, mushrooms, and tofu cubes."
      }
    ]
  },
  {
    title: "Seasonal Specialties",
    japName: "季節限定", // “Seasonal Limited”
    id: "specials",
    description: "Limited selections inspired by regional flavors of Japan.",
    items: [
      {
        name: "Hokkaido Veggie Ramen",
        price: { usd: "$17", yen: "¥2,450" },
        description: "Creamy vegetable broth with firm noodles, seasonal vegetables, and bamboo shoots."
      },
      {
        name: "Tokyo Shio Ramen",
        price: { usd: "$15", yen: "¥2,150" },
        description: "Light salt-based vegetable broth, yuzu zest, tofu slices, and delicate straight noodles."
      },
      {
        name: "Truffle Shoyu Ramen",
        price: { usd: "$22", yen: "¥3,200" },
        description: "Elegant soy broth finished with black truffle oil and soft marinated egg."
      },
      {
        name: "Seafood-Free Miso Ramen",
        price: { usd: "$20", yen: "¥2,900" },
        description: "Miso broth enriched with mushrooms, seasonal greens, and tofu cubes."
      }
    ]
  },
  {
    title: "Small Plates",
      japName: "小皿", // “Small Dishes”
    id: "small",
    description: "Authentic Japanese sides to complement your ramen experience.",
    items: [
      {
        name: "Vegetable Gyoza",
        price: { usd: "$6", yen: "¥870" },
        description: "Pan-seared dumplings filled with seasoned vegetables."
      },
      {
        name: "Sweet Potato Karaage",
        price: { usd: "$8", yen: "¥1,150" },
        description: "Crispy marinated sweet potato bites served with citrus mayo."
      },
      {
        name: "Takoyaki-Style Veg Balls",
        price: { usd: "$7", yen: "¥1,010" },
        description: "Osaka-style savory balls with mushroom and vegetable filling topped with bonito-free sauce."
      },
      {
        name: "Edamame",
        price: { usd: "$5", yen: "¥720" },
        description: "Steamed young soybeans finished with sea salt."
      }
    ]
  },
  {
    title: "Desserts & Drinks",
    japName: "甘味・飲物",
    id: "desserts",
    description: "Traditional sweets and refined beverages.",
    items: [
      {
        name: "Matcha Tiramisu",
        price: { usd: "$8", yen: "¥1,150" },
        description: "Layered mascarpone cream infused with premium Japanese matcha."
      },
      {
        name: "Mochi Ice Cream",
        price: { usd: "$6", yen: "¥870" },
        description: "Soft rice mochi filled with vanilla, matcha, or red bean ice cream."
      },
      {
        name: "Japanese Cheesecake",
        price: { usd: "$7", yen: "¥1,010" },
        description: "Light and airy soufflé-style cheesecake with subtle sweetness."
      },
      {
        name: "Yuzu Sparkling Soda",
        price: { usd: "$4", yen: "¥580" },
        description: "Refreshing citrus soda made with fresh yuzu extract."
      }
    ]
  }
];
    return (
        <section id="menu" className="w-[90%] mx-auto max-w-6xl space-y-10 pt-26">
           <div className="space-y-3">
  <h3 className="text-yellow-400 text-xs font-light font-rope tracking-widest bg-gradient-to-br from-[#0f0f0f] via-[#262626] to-[#0f0f0f] inline-block rounded-full px-3 py-2 shadow-[0px_0px_3px_rgba(255,255,255,0.3)] p-4 bg-gray-800 text-white">
    EXPLORE OUR DISHES
  </h3>
  <div className="space-y-2">
    <h2 className="text-white text-2xl md:text-3xl font-classy">Our Menu</h2>
    <p className="text-gray-100 font-rope font-light max-w-[90ch]">
      Discover authentic Japanese ramen and handcrafted specialties prepared with precision and premium ingredients.
    </p>
  </div>
</div>

            {sections.map((section, index) => (
                <div key={index} id={section.id} className="space-y-8">
                    <div className="bg-black p-8 rounded-lg space-y-8">
                        <div className=" border-b-1 space-y-4 border-white/50 py-2">
                            <div className="space-y-1 flex flex-col md:flex-row justify-between items-center">
                                <div className="space-y-2">
                                <h5 className="flex gap-2 max-md:justify-center items-center text-yellow-300/70"><span className="bg-yellow-300/70 h-[1px] w-10"></span><span>{section.japName}</span> <span className="bg-yellow-300/70 h-[1px] w-10"></span> </h5>
                                    <h3 className="text-white text-2xl font-classy">{section.title}</h3>
                                </div>
                                <div>
                                    <h5 className="text-yellow-300/70 font-classy text-sm">0{index + 1}/ 04</h5>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm font-rope font-light max-w-[90ch] mb-3">
                                {section.description}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
                            {section.items.map((item, i) => (
                               <div key={i} className="text-white border border-white/20 rounded bg-[#151515]">
                                <div className="flex flex-col items-center">
                                 <div className="h-50 overflow-hidden flex items-center justify-center">
                                    <img src={image1} alt="" className="object-cover"/>
                                </div>
                                        
                                <div className="flex items-start gap-4 px-4 flex-col bg-[#151515] py-4 h-full">
                                    <div className="flex justify-between items-start w-full">
                                        <h4 className="text-lg font-classy">{item.name}</h4>
                                        <div className="flex flex-col items-end">
                                            <h5 className="text-yellow-400 text-lg font-classy">{item.price.usd}</h5> <h5 className="text-yellow-300/70 text-xs font-classy">{item.price.yen}</h5>
                                        </div>
                                    </div>
                                        <p className="font-rope text-gray-300 font-light text-sm">{item.description}</p>
                                </div>
                                </div>
                               </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
            ))}
        </section>
    )
}