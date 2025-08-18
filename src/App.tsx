import Navbar from "./components/Navbar";
import LogoCarousel from "./components/LogoCarousel";
import Hero from "./components/Hero";
import About from "./components/About";
import EventHighlights from "./components/EventHighlights";
import Tracks from "./components/Tracks";
import EntrepreneursChallenge from "./components/EntrepreneursChallenge";
import Wellness from "./components/Wellness";
import Legacy from "./components/Legacy";
import Speakers from "./components/Speakers";
import Committee from "./components/Committee";
import Sponsors from "./components/Sponsors";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import EventVideos from "./components/EventVideos";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <div className="">
        <Hero />
        <LogoCarousel />
        <About />
        <EventHighlights />
        <Tracks />
        <EntrepreneursChallenge />
        <Wellness />
        <Legacy />
        <EventVideos />
        <Speakers />
        <Committee />
        <Sponsors />
        <Registration />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
