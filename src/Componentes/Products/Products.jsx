import React from 'react'
import Heading from '../Shared/Heading'

import Img1 from "../../Componentes/Products/p-1.png"
import Img2 from "../../Componentes/Products/p-2.png"
import Img3 from "../../Componentes/Products/p-3.png"
import ProductCard from './ProductCard'
import Img4 from "../../Componentes/Products/p-4.png"
import Img5 from "../../Componentes/Products/p-5.png"
import Img6 from "../../Componentes/Products/p-6.png"
import Img7 from "../../Componentes/Products/p-7.png"
import Img8 from "../../Componentes/Products/p-8.png"


const ProductsData =[
    {
        id: 1,
        img: Img1,
        title: "Apple iphone 16 pro max (256GB, 512GB, 1TB) Esim / Physical sim ",
        price: " Available ‼️ ",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: " Apple iphone 16 Plus (128GB, 256GB, 512GB) Esim / Physical sim",
        price: "Available ‼️ ",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: " Apple iphone 15 pro max (256GB, 512GB, 1TB) Esim / Physical sim",
        price: "Available ‼️ ",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: " Apple iphone 15  (128GB, 256GB, 512GB) Esim / Physical sim",
        price: "Available ‼️ ",
        aosDelay: "400",
    },

];


const ProductsData2 =[
    {
        id: 1,
        img: Img5,
        title: "Apple iphone 14 pro max  (128GB, 256GB, 512GB 1TB) Esim / Physical sim",
        price: "Available ‼️ ",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img6,
        title: "Apple iphone 14  (128GB, 256GB, 512GB) Esim / Physical sim",
        price: "Available ‼️ ",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img7,
        title: " Apple iphone 13 pro max  (128GB, 256GB, 512GB 1TB) Esim / Physical sim",
        price: "Available ‼️ ",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img8,
        title: " Apple iphone 13 mini  (128GB, 256GB, 512GB ) Esim / Physical sim",
        price: "Available ‼️ ",
        aosDelay: "400",
    },
    {
        id: 1,
        img: Img5,
        title: "Apple iphone 12 pro max  (128GB, 256GB, 512GB 1TB) Esim / Physical sim",
        price: "Available ‼️ ",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img6,
        title: "Apple iphone 12 pro  (128GB, 256GB, 512GB) Esim / Physical sim",
        price: "Available ‼️ ",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img7,
        title: " Apple iphone 11 pro max  (128GB, 256GB, 512GB 1TB) Esim / Physical sim",
        price: "Available ‼️ ",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img8,
        title: " Apple iphone 11 (128GB, 256GB, 512GB ) Esim / Physical sim",
        price: "Available ‼️ ",
        aosDelay: "400",
    },

];

const Products = () => {
  return (
   <div>
     <div className='container'>
        {/* header section */}
        <Heading title="Our Prodect" 
        subtitle={"Explore Our Product"} />

            {/* Body section */}
          <ProductCard data={ProductsData} /> 
          <ProductCard data={ProductsData2} /> 
     </div>
   </div>
  );
};

export default Products