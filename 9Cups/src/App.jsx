import Hero from './components/hero.jsx';
import About from './components/about.jsx';
import Services from './components/services.jsx';
import Footer from './components/footer.jsx'; 
import CtaFinal from './components/ctafinal.jsx';
import Navbar from './components/Navbar.jsx';
function App() {
  return (
    <div className="bg-black text-white">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <CtaFinal/>
      <Footer/>
    </div>
  );
}
export default App;