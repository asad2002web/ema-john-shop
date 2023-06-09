import React from 'react'
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Products = (props) => {
    const {name,price,img, seller, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;
   
  return (
    <div className='product'>
        <img src={img} alt="" />
        <div className="product-info">
        <h6 className='product-name'>{name}</h6>
        <p className='product-price'>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p className='product-ratting'>Ratting: {ratings} Start</p>
        </div>
        <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to Cart
        <FontAwesomeIcon className='cart-icon' icon={faShoppingCart} />
        </button>
    </div>
  )
}

export default Products