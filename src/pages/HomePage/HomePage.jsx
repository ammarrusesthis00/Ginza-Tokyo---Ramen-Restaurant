import Hero from "./sections/Hero";
import Statistics from "./sections/Statistics";
import Experience from "./sections/Experience";
import Menu from "./sections/Menu";
import Process from "./sections/Process";

export default function Homepage() {
    return (
        <>
            <Hero />
            <Statistics />
            <Experience />
            <Menu />
            <Process />
        </>
    )
}