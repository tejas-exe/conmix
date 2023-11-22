import { AboutUs } from './components/aboutUs/aboutUs';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import Products from './components/products/products';
import Contacts from './components/contactUs/contactUs';
import Navbar from './components/navbar/navbar';
import Footer from './components/Footer/footer'
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <AboutUs />
      <Products />
     <Contacts/>
     <Footer/>
    </>
  );
}

export default App;
