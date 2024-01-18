import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Service from './Components/Service/Service';
import SocialMedia from './Components/SocialMedia/SocialMedia';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Service/>
      <About/>
      <Testimonials/>
      <SocialMedia/>
      <Footer/>
    </div>
  );
}

export default App;
