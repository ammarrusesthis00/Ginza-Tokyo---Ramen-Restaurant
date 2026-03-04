import Hero from "./sections/Hero";
import Statistics from "./sections/Statistics";
import Experience from "./sections/Experience";
import Menu from "./sections/Menu";
import Process from "./sections/Process";
import Reviews from "./sections/Reviews";
import Reservations from "./sections/Reservations";
import Footer from "../../components/Footer";

export default function Homepage() {
    return (
        <>
            <Hero />
            <Statistics />
            <Experience />
            <Menu />
            <Process />
            <Reviews />
            <Reservations />
            <Footer />
        </>
    )
}
