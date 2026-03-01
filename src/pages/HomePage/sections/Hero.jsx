import Image1 from "../../../assets/images/image1.webp";
import Image2 from "../../../assets/images/image2.webp";
import Image3 from "../../../assets/images/image3.webp";
import Image4 from "../../../assets/images/image4.webp";
import Navbar from "../../../components/Navbar";
import PrimaryButton from "../../../components/PrimaryButton";
import MenuButton from "../../../components/MenuButton";

export default function Hero() {

  return (
        <header className="space-y-10 w-[90%] mx-auto max-w-6xl">
                <Navbar />
            <div className=" grid lg:grid-cols-2 items-center md:gap-12 grid-cols-1 gap-12">
                <div className="space-y-20">
                    <div className="space-y-10">
                      <div className="space-y-3">
                          <h1 className="font-classy text-white text-3xl md:text-4xl lg:text-5xl">Ramen Elevated to Its Finest</h1>
                          <p className="text-gray-100 font-rope font-light max-w-prose">
                        Experience ramen crafted with precision and the finest ingredients at Ginza Tokyo. Reserve your table today.
                      </p>
                      <p className="text-gray-100 font-rope font-light max-w-prose">
                        Each bowl is a masterpiece, combining traditional techniques with fresh, carefully selected ingredients. Savor the rich broth, perfectly cooked noodles, and exquisite toppings in an atmosphere of authentic Japanese elegance.
                      </p>
                      </div>
                      <div className="flex items-center gap-3">
                          <PrimaryButton href={'#'} text={'Book Now'} />
                          <MenuButton />
                      </div>
                      
                    </div>
      
                </div>



        <div className="max-h-[90vh]">
          <img src={Image2} alt=""  className="rounded-lg"/>
        </div>
        </div>
        </header>
    )
}
