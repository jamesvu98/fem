import './App.css'
import imageMobile from './assets/image-product-mobile.jpg';
import imageDesktop from './assets/image-product-desktop.jpg';
import { PreviewCard } from './components/preview-card/preview-card'

const content = {
  category: "PERFUME",
  product: "Gabrielle Essence Eau De Parfum",
  description: "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the house of CHANEL.",
  price: 149.99,
  retailprice: 169.99
};

const imageSet = {
  mobileImg: imageMobile,
  desktopImg: imageDesktop
}

function App() {
  return (
    <PreviewCard imageSet={imageSet} content={content}/>
  )
}

export default App
