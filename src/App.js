import './App.css';
import Slogan from './components/Slogan/Slogan';
import CarouselBoot from './components/carouselBootstrap/CarouselBoot';
import ContactUs from './components/FormsControl/FormEmailJs';
import Header from './components/Header/Header'
import Services from './components/OurServices/services'
import ButtonGeneric from './components/Button';
import Products from './components/Products/Products';
import Testimonial from './components/Products/Testimonials/Testimonial';
import SocialMedia from './components/SocialMedia';
import About from './components/About/About';
import Galeries from './components/galeries/Galeries';

function App() {
  return (
   <div class="container-fluid">
     <Header />
     <Slogan />
     <CarouselBoot />
     <ContactUs />
     <Services />
     <ButtonGeneric>
       Solicitar Orçamento
     </ButtonGeneric>
     <Products />
     <Testimonial />
     <ButtonGeneric>Solicite seu Orçamento</ButtonGeneric>
     <About />
     <ButtonGeneric>Solicite seu Orçamento</ButtonGeneric>
     <Galeries />
     <br />
     <SocialMedia />
   </div> 
  )
}

export default App;
