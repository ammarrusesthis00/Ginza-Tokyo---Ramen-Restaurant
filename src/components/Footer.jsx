import PrimaryButton from "../components/PrimaryButton";
import  SecondaryButton  from "../components/MenuButton";
export default function Footer() {
    return (
        <footer className="w-[90%] p-8 rounded-lg mx-auto max-w-6xl pb-8 bg-black space-y-10">
            <div className="space-y-8">
        <div className="space-y-1">
            <h2 className="text-white text-2xl md:text-3xl font-classy">
              Ginza Tokyo
            </h2>
            <p className="text-gray-100 font-rope font-light max-w-prose">
              Explore the links below, subscribe to our newsletter for exclusive updates, and visit us to savor our authentic, premium ramen experience.
            </p>
        </div>
          <PrimaryButton text={"Book Now"} />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-6 text-white">
        {/* Navigation Links */}
        <div className="space-y-3">
          <h3 className="font-classy text-lg">Navigation</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-gray-300 duration-400 transition-all">Home</a></li>
            <li><a href="#menu" className="hover:text-gray-300 duration-400 transition-all">Menu</a></li>
            <li><a href="#reservations" className="hover:text-gray-300 duration-400 transition-all">Reservations</a></li>
            <li><a href="#about" className="hover:text-gray-300 duration-400 transition-all">About</a></li>
            <li><a href="#contact" className="hover:text-gray-300 duration-400 transition-all">Contact</a></li>
          </ul>
        </div>

        {/* Pages Links */}
        <div className="space-y-3">
          <h3 className="font-classy text-lg">Page Navigation</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-gray-300 duration-400 transition-all">HomePage</a></li>
            <li><a href="#menu" className="hover:text-gray-300 duration-400 transition-all">MenuPage</a></li>
            <li><a href="#reservations" className="hover:text-gray-300 duration-400 transition-all">OnlineOrder Page</a></li>
            <li><a href="#about" className="hover:text-gray-300 duration-400 transition-all">AboutPage</a></li>
            <li><a href="#contact" className="hover:text-gray-300 duration-400 transition-all">ContactPage</a></li>
          </ul>
        </div>

        {/* Menu Links */}
        <div className="space-y-3">
          <h3 className="font-classy text-lg">Menu</h3>
          <ul className="space-y-2">
            <li><a href="#ramen" className="hover:text-gray-300 duration-400 transition-all">Ramen</a></li>
            <li><a href="#appetizers" className="hover:text-gray-300 duration-400 transition-all">Appetizers</a></li>
            <li><a href="#drinks" className="hover:text-gray-300 duration-400 transition-all">Drinks</a></li>
            <li><a href="#desserts" className="hover:text-gray-300 duration-400 transition-all">Desserts</a></li>
          </ul>
        </div>
      </div>

         {/* Newsletter */}
        <div className="text-white space-y-6">
          <div className="space-y-1">
              <h3 className="font-classy text-xl">Newsletter</h3>
              <p className="text-gray-300 text-sm">Subscribe to get the latest updates and specials.</p>
          </div>
            <div className="flex flex-col gap-2 lg:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 focus-none max-w-sm outline-none px-3 py-2 text-white border border-white"
                />
            <a href="#" className="button font-classy text-white bg-[#000] px-6 py-3 border-white/30 border" style={{textShadow: '0 0 8px white'}}>
                Subscribe
                </a>
            </div>
        </div>
      {/* Bottom Right Credit */}
      <div className="mt-12 text-right text-gray-400 text-sm">
        Built by <a href="https://github.com/ammarrusesthis00" className="text-gray-200">Ammar</a>
      </div>
        </footer>
    )
}