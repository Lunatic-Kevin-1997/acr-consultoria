import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Methodology from "./components/Methodology/Methodology";
import Contact from "./components/Contact/Contact";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <div className="site-shell">
      <main>
        <Hero />
        <About />
        <Services />
        <Methodology />
        <Contact />
      </main>

      <WhatsAppButton />
    </div>
  );
}

export default App;