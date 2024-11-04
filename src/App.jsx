import React from 'react';
import Navbar from './Componentes/Navbar';
import Hero from './Componentes/Hero/Hero';
import Category from './Componentes/Category/Category';
import Services from './Componentes/Services/Services';
import Products from './Componentes/Products/Products';
import Banner from './Componentes/Banner/Banner';

import smartwatch2 from "../../Frontend/src/Componentes/Category/smartwatch2.png";
import Blog from './Componentes/Blog/Blog';
import Footer from './Componentes/Footer/Footer';
import Popup from './Componentes/Popup/Popup';
import AOS, { refresh } from "aos";
import "aos/dist/aos.css";

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: " 14 dec to 25 dec",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "winter sales",
  title4: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  bgColor: "#2dcc6f ",
};

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
    <Navbar handleOrderPopup={handleOrderPopup} />
    <Hero handleOrderPopup={handleOrderPopup} /> 
    <Category />
    <Services />
    <Products />
    <Banner data={BannerData2}/>
    <Blog />
    <Footer />
    <Popup orderPopup={orderPopup}
    handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default App;