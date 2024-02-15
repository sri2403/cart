import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  const[cartCount,setCartCount]=useState(0);
  let data=[
    {
      image:"https://source.unsplash.com/random/?skincare?1",
      name:"Facewash",
      price:"Rs.300",
    },
    {
      image:"https://source.unsplash.com/random/?skincare?2",
      name:"Moisturizer",
      price:"Rs.450",
    },
    {
      image:"https://source.unsplash.com/random/?skincare?3",
      name:"Toner",
      price:"Rs.250",
    },
    {
      image:"https://source.unsplash.com/random/?skincare?4",
      name:"Serum",
      price:"Rs.400",
    },
    {
      image:"https://source.unsplash.com/random/?skincare?5",
      name:"Sunscreen",
      price:"Rs.900",
    },
    {
      image:"https://source.unsplash.com/random/?skincare?6",
      name:"Face oil",
      price:"Rs.500",
    },
    {
      image:"https://source.unsplash.com/random/?skincare?7",
      name:"Makeup remover",
      price:"Rs.250",
    },
    {
      image:"https://source.unsplash.com/random/?skincare?8",
      name:"Face scrub",
      price:"Rs.150",
    }]
  const[products,setProducts] =useState(data); 
  return (
    <div>
      <Navbar cartCount={cartCount}/>
      <Header />
      {/* {products.map((item, index) => (
        <ProductCard key={index} item={item} index={index} setCartCount={setCartCount} />
      ))} */}
      <div className="container">
                <div className="row">
                    {products.slice(0, 4).map((item, index) => (
                        <div className="col-lg-3 col-md-6 mb-4">
                            <ProductCard key={index} item={item} index={index} setCartCount={setCartCount} />
                        </div>
                    ))}
                </div>
                <div className="row">
                    {products.slice(4, 8).map((item, index) => (
                        <div className="col-lg-3 col-md-6 mb-4">
                            <ProductCard key={index} item={item} index={index + 4} setCartCount={setCartCount} />
                        </div>
                    ))}
                </div>
            </div>
      <Footer />
    </div>
  );
};

export default App;