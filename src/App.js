import Navigation from "./components/navbar";
import HeroContent from "./components/hero";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navigation/>
      <HeroContent/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
