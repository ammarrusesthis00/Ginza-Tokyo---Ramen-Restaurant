import { NavLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

export default function Navbar() {
    return (
        <>
            <nav className="text-white flex flex-col pt-5 md:pb-5">
                <div id="mobile" className="md:hidden">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-classy">Ginza Tokyo</h2>
                        <BurgerMenu />
                    </div>
                </div>

                <div id="tablet" className="hidden md:flex lg:hidden items-center justify-between">
                    <div className="">
                        <h2 className="text-2xl font-classy">Ginza Tokyo</h2>
                    </div>
                    <ul className="flex items-center gap-6">
                        <NavLink to="/about" className="font-rope font-light">About Us</NavLink>
                        <a href="#gallery" className="font-rope font-light">Gallery</a>
                        <a href="#reservation" className="font-rope font-light">Location</a>
                        <NavLink to="/contact" className="font-rope font-light">Contact</NavLink>
                        
                        <NavLink to={"/online-order"} className="bg-black px-3 py-2 font-classy border border-white/30" style = {{textShadow: '0 0 8px white'}}>
                            Order Online
                        </NavLink>
                    </ul>
                    <BurgerMenu />
                </div>

                <div id="desktop" className="hidden lg:flex items-center justify-between">
                    <div>
                        <h2 className="font-classy text-2xl">Ginza Tokyo</h2>
                    </div>

                    <ul className="flex items-center gap-3">
                        <div className="hidden md:flex items-center gap-9">
                            <a href="#menu" className="font-rope font-light">Menu</a>
                            <NavLink to="/about" className="font-rope font-light">About Us</NavLink>
                            <a href="#gallery" className="font-rope font-light">Gallery</a>
                            <a href="#reservation" className="font-rope font-light">Location</a>
                            <NavLink to="/contact" className="font-rope font-light">Contact</NavLink>

                            <NavLink to={"/online-order"} className="bg-black px-3 py-2 font-classy border border-white/30" style = {{textShadow: '0 0 8px white'}}>
                                Order Online
                            </NavLink>
                        </div>
                    </ul>
                    <BurgerMenu />
                </div>
            </nav>
        </>
    )
}