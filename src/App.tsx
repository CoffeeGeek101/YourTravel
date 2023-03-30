import { Carousal } from './components/Carousal';
import { HeroPage } from './components/HeroPage';
import './index.css'
import { Image } from './CaroImg';
import { Aboutus } from './components/Aboutus';
import { Gallery } from './components/Gallery';
import Footer from './components/Footer';
import { FooterObj } from './FooterHyperObj';

function App(){

  return (
    <div>
      <HeroPage/>
      <Carousal  imgArr={Image}/>
      <Aboutus/>
      <Gallery/>
      <Footer footerProp={FooterObj}/>
    </div>
  )
}

export default App;
