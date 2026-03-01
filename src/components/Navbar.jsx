import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <>
            <nav className="text-white flex flex-col py-2 md:py-4 lg:py-6">
                <div id="mobile" className="md:hidden">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-classy">Ginza Tokyo</h2>
                        <Menu />
                    </div>
                </div>

                <div id="tablet" className="hidden md:flex lg:hidden items-center justify-between">
                    <div className="">
                        <h2 className="text-2xl font-classy">Ginza Tokyo</h2>
                    </div>
                    <ul className="flex items-center gap-4">
                        <a href="" className="font-rope font-light">About Us</a>
                        <a href="" className="font-rope font-light">Gallery</a>
                        <a href="" className="font-rope font-light">Location</a>
                        <a href="" className="font-rope font-light">FAQs</a>
                        <a href="" className="font-rope font-light">Contact</a>
                        
                        <a href="" className="bg-black px-3 py-2 font-classy border border-white/30" style = {{textShadow: '0 0 8px white'}}>
                            Order Online
                        </a>
                    </ul>
                    <Menu />
                </div>

                <div id="desktop" className="hidden lg:flex items-center justify-between">
                    <div>
                        <h2 className="font-classy text-2xl">Ginza Tokyo</h2>
                    </div>

                    <ul className="flex items-center gap-3">
                        <div className="hidden md:flex items-center gap-9">
                            <a href="" className="font-rope font-light">Menu</a>
                            <a href="" className="font-rope font-light">About Us</a>
                            <a href="" className="font-rope font-light">Gallery</a>
                            <a href="" className="font-rope font-light">Location</a>
                            <a href="" className="font-rope font-light">Contact</a>

                            <a href="" className="bg-black px-3 py-2 font-classy border border-white/30" style = {{textShadow: '0 0 8px white'}}>
                                Order Online
                            </a>
                        </div>
                    </ul>
                    <Menu />
                </div>
            </nav>
        </>
    )
}