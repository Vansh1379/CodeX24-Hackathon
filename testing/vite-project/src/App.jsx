import { MainCard } from './components/cards/MainCard';
import './index.css';
import { LampDemo } from "./test";
import "./App.css"
import { Footer } from './components/footer/Fotter';
import { Navbar } from './components/Navbar/Navbar';import { MovingBorderDemo } from './test2';
import { HeroSection } from './components/cards/HeroSection';
import { OuterPage } from './components/OuterPage/OuterPage';
import { BackgroundGradientAnimation } from './components/ui/GradientAnimation';
import { SparklesPreview } from './test4';
import { TypewriterEffectSmooth } from './components/ui/Typewriter-effect';
import { TypewriterEffectSmoothDemo } from './test5';


function App() {

  return (
    <div className="App">
     
      <Navbar />
   
      <LampDemo />
      {/* <SparklesPreview /> */}
      <HeroSection />
      <Footer />
      {/* <MovingBorderDemo /> */}
    </div>
  );
}

export default App
