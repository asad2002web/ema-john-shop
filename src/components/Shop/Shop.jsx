import React, { useEffect, useState } from 'react'
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(newCart)
    };

    return (
    <div className='shop-container'>
        <div className="products-container">
            {
                products.map(product => <Products
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                ></Products>)
            }       
        </div>
        <div className="order-container">
            <h2>Order Summary</h2>
            <p>Select Items: {cart.length}</p>
        </div>
    </div>
  )
}

export default Shop