import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function BurgerMenu() {

    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open)
    };

    return (
        <div className="relative overflow-hidden">
            {
                open ? <X className="cursor-pointer" onClick={() =>{
                 toggleOpen()
                }}/> : <Menu className="cursor-pointer" onClick={() => {
                 toggleOpen()
                }}/>
            }


{open && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/30 z-40"
          onClick={toggleOpen}
        />
      )}
             
         <div
  className={`z-50 fixed top-0 overflow-y-scroll scrollbar-none left-0 h-full w-[80%] md:w-[80%] lg:w-[40%] bg-black select-none text-white p-8 flex flex-col space-y-8 transition-transform duration-500
  ${open ? "translate-x-0" : "-translate-x-full"}`}
>
    <div className="space-y-1">
        <h2 className="font-classy text-2xl">Ginza Tokyo</h2>
    </div>
  <nav className="flex flex-col gap-6">
    <div className="space-y-1">
        <h3 className="font-classy text-white text-xl">Page Navigation</h3>
            <p className="text-gray-400 text-sm">Navigate to your desired page.</p>
    </div>
      <div className="flex flex-col gap-3">
          <NavLink to="/" className="font-rope text-md font-light hover:text-gray-400 duration-400 transition-all">HomePage</NavLink>
          <NavLink to="/menu" className="font-rope text-md font-light hover:text-gray-400 duration-400 transition-all">MenuPage</NavLink>
          <NavLink to="/online-order" className="font-rope text-md font-light hover:text-gray-400 duration-400 transition-all">OnlineOrderPage</NavLink>
          <a href="#gallery" className="font-rope text-md font-light hover:text-gray-400 duration-400 transition-all">GalleryPage</a>
          <NavLink to="/about" className="font-rope text-md font-light hover:text-gray-400 duration-400 transition-all">AboutPage</NavLink>
          <NavLink to="/contact" className="font-rope text-md font-light hover:text-gray-400 duration-400 transition-all">ContactPage</NavLink>
      </div>
  </nav>

  <nav className="flex flex-col gap-6">
     <div className="space-y-1">
        <h3 className="font-classy text-white text-xl">Section Navigation</h3>
            <p className="text-gray-400 text-sm">Navigate to your desired section.</p>
    </div>
    <div className="flex flex-col gap-3">
        <a href="#menu" className="font-rope text-md font-light hover:text-gray-400 duration-400 transition-all">Menu</a>
<a href="#experience" className="font-rope text-md font-light hover:text-gray-400 duration-400 transition-all">Experience</a>
<a href="#process" className="font-rope text-md font-light hover:text-gray-400 duration-400 transition-all">Process</a>
<a href="#reviews" className="font-rope text-md font-light hover:text-gray-400 duration-400 transition-all">Reviews</a>
<a href="#reservation" className="font-rope text-md font-light hover:text-gray-400 duration-400 transition-all">Reservation</a>
<a href="#reservation" className="font-rope text-md font-light hover:text-gray-400 duration-400 transition-all">Contact</a>
<a href="#reservation" className="font-rope text-md font-light hover:text-gray-400 duration-400 transition-all">Locations & Hours</a>
<a href="#footer" className="font-rope text-md font-light hover:text-gray-400 duration-400 transition-all">Subscribe to Newsletter</a>
    </div>
  </nav>
</div>
        </div>
    )
}