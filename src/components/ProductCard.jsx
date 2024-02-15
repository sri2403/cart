import './ProductCard.css';

import React, { useState } from 'react';

const ProductCard = ({ item, index, setCartCount }) => {
  const [status, setStatus] = useState(true);

  const CartAdd = () => {
    setStatus(false);
    setCartCount((prevCount) => prevCount + 1);
  };

  const CartRemove = () => {
    setStatus(true);
    setCartCount((prevCount) => prevCount - 1);
  };

  return (
    <div > 
            <div className="card h-100">
                <div className="card-body">
                <img src={item.image} className="card-img-top" alt={item.name} />
                    <h5 className="card-title text-center">{item.name}</h5>
                    <p className="card-text text-center">{item.price}</p>
                    <div className="text-center">
                        {status ? (
                            <button className="btn btn-success" onClick={CartAdd}>
                                Add to Cart
                            </button>
                        ) : (
                            <button className="btn btn-danger" onClick={CartRemove}>
                                Remove from Cart
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
  );
};

export default ProductCard;
