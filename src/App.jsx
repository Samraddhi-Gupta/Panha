import './App.css';
import Header from './assets/components/Header';
import Hero from './assets/components/Hero'; 
import AboutUs from './assets/components/AboutUs'; 
import Manifesto from './assets/components/Manifesto';
import OurServices from './assets/components/OurServices';

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="pt-[85px]"></div>
        <Hero />
        <AboutUs/>
        <Manifesto/>
        <OurServices/>
      </div>
    </>
  );
}

export default App;


