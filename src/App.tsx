import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import EventHighlights from "./components/EventHighlights";
import Tracks from "./components/Tracks";
import EntrepreneursChallenge from "./components/EntrepreneursChallenge";
import Wellness from "./components/Wellness";
import Legacy from "./components/Legacy";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  if (showRegistrationForm) {
    return <RegistrationForm />;
  }

  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <EventHighlights />
      <Tracks />
      <EntrepreneursChallenge />
      <Wellness />
      <Legacy />
      <Registration onRegister={() => setShowRegistrationForm(true)} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
