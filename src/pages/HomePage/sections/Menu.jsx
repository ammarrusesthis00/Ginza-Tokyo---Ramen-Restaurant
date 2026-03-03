import image1 from "../../../assets/images/image1.webp"

export default function Menu() {

const sections = [
    {
        title: "Signature Ramen",
        description: "Our most celebrated bowls, crafted with slow-simmered broths and traditional Japanese techniques.",
        items: [
            {
                name: "Vegetable Ramen",
                price: "$14 (¥2,000)",
                description: "Rich vegetable broth, house-made noodles, marinated egg, fresh mushrooms, and scallions."
            },
            {
                name: "Shoyu Ramen",
                price: "$13 (¥1,850)",
                description: "Clear chicken-free soy broth, bamboo shoots, nori, scallions, and tofu slices."
            },
            {
                name: "Miso Ramen",
                price: "$15 (¥2,150)",
                description: "Deep miso-infused broth, sweet corn, butter, bean sprouts, and thick curly noodles."
            },
            {
                name: "Spicy Sesame Ramen",
                price: "$16 (¥2,300)",
                description: "Savory sesame broth with chili oil, bok choy, mushrooms, and tofu cubes."
            }
        ]
    },
    {
        title: "Seasonal Specialties",
        description: "Limited selections inspired by regional flavors of Japan.",
        items: [
            {
                name: "Hokkaido Veggie Ramen",
                price: "$17 (¥2,450)",
                description: "Creamy vegetable broth with firm noodles, seasonal vegetables, and bamboo shoots."
            },
            {
                name: "Tokyo Shio Ramen",
                price: "$15 (¥2,150)",
                description: "Light salt-based vegetable broth, yuzu zest, tofu slices, and delicate straight noodles."
            },
            {
                name: "Truffle Shoyu Ramen",
                price: "$22 (¥3,200)",
                description: "Elegant soy broth finished with black truffle oil and soft marinated egg."
            },
            {
                name: "Seafood-Free Miso Ramen",
                price: "$20 (¥2,900)",
                description: "Miso broth enriched with mushrooms, seasonal greens, and tofu cubes."
            }
        ]
    },
    {
        title: "Small Plates",
        description: "Authentic Japanese sides to complement your ramen experience.",
        items: [
            {
                name: "Vegetable Gyoza",
                price: "$6 (¥870)",
                description: "Pan-seared dumplings filled with seasoned vegetables."
            },
            {
                name: "Sweet Potato Karaage",
                price: "$8 (¥1,150)",
                description: "Crispy marinated sweet potato bites served with citrus mayo."
            },
            {
                name: "Takoyaki-Style Veg Balls",
                price: "$7 (¥1,010)",
                description: "Osaka-style savory balls with mushroom and vegetable filling topped with bonito-free sauce."
            },
            {
                name: "Edamame",
                price: "$5 (¥720)",
                description: "Steamed young soybeans finished with sea salt."
            }
        ]
    },
    {
        title: "Desserts & Drinks",
        description: "Traditional sweets and refined beverages.",
        items: [
            {
                name: "Matcha Tiramisu",
                price: "$8 (¥1,150)",
                description: "Layered mascarpone cream infused with premium Japanese matcha."
            },
            {
                name: "Mochi Ice Cream",
                price: "$6 (¥870)",
                description: "Soft rice mochi filled with vanilla, matcha, or red bean ice cream."
            },
            {
                name: "Japanese Cheesecake",
                price: "$7 (¥1,010)",
                description: "Light and airy soufflé-style cheesecake with subtle sweetness."
            },
            {
                name: "Yuzu Sparkling Soda",
                price: "$4 (¥580)",
                description: "Refreshing citrus soda made with fresh yuzu extract."
            }
        ]
    }
]

    return (
        <section id="menu" className="w-[90%] mx-auto max-w-6xl space-y-10 pt-26">
            <div className="space-y-2">
                <h2 className="text-white text-2xl md:text-3xl font-classy">Our Menu</h2>
                <p className="text-gray-100 font-rope font-light max-w-[90ch]">
                    Discover authentic Japanese ramen and handcrafted specialties prepared with precision and premium ingredients.
                </p>
            </div>

            {sections.map((section, index) => (
                <div key={index} className="space-y-8">
                    <div className="bg-black p-8 rounded-lg space-y-6">
                        <div className="space-y-1">
                            <h3 className="text-white text-xl lg:text-2xl font-classy">{section.title}</h3>
                            <p className="text-gray-100 font-rope font-light max-w-[90ch]">
                                {section.description}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-items-center">
                            {section.items.map((item, i) => (
                                <div key={i} className=" lg:max-w-[70%] text-center space-y-4 flex flex-col justify-between">
                                    <img src={image1} alt={item.name} className="w-full rounded-lg" />
                                    <h4 className="text-xl text-white font-classy">{item.name}</h4>
                                    <p className="text-black bg-white/90 font-rope">
                                        {item.price}
                                    </p>
                                    <p className="text-sm text-gray-100 font-rope font-light">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
            ))}
        </section>
    )
}