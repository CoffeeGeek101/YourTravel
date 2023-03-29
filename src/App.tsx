import { Carousal } from './components/Carousal';
import { HeroPage } from './components/HeroPage';
import './index.css'
import { Image } from './CaroImg';

function App(){

  return (
    <div>
      <HeroPage/>
      <Carousal  imgArr={Image}/>
    </div>
  )
}

export default App;
