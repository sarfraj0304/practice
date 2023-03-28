import React, { useEffect, useState } from 'react';
import CartComponent from './CartComponent';
import ProductCard from './ProductCard';

const Products = () => {
  const [data, setData] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  const getData = () => {
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  };

  const addToCart = (id, name, price) => {
    let modData = data.map((item) => {
      if (item.id === id) {
        return { ...item, stock: item.stock - 1 };
      } else {
        return item;
      }
    });
    setData(modData);

    let added = false;
    let modCart = cartProducts.map((item) => {
      if (item.id === id) {
        added = true;
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });

    if (added) {
      setCartProducts(modCart);
    } else {
      let item = {
        id,
        name,
        price,
        quantity: 1,
      };

      setCartProducts([...cartProducts, item]);
    }
  };

  return (
    <div>
      {data.length > 0 ? (
        <div className="dashboard">
          <h1>Dashboard</h1>
          <div>
            <h1>Cart</h1>
            {/* import cart component here */}
            <CartComponent cartProducts={cartProducts} />
          </div>
          <div data-testid="products-container">
            {/* map thorugh products */}
            {data?.map((item) => (
              <ProductCard key={item.id} {...item} addToCart={addToCart} />
            ))}
          </div>
        </div>
      ) : (
        <button data-testid="get-btn" onClick={getData}>
          Get Products
        </button>
      )}
    </div>
  );
};

export default Products;
