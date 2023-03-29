import React from 'react'
import './Products.css'

const Products = (props) => {
    const {name,price,img, seller, ratings} = props.product;
  return (
    <div className='product'>
        <img src={img} alt="" />
        <div className="product-info">
        <h6 className='product-name'>{name}</h6>
        <p className='product-price'>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p className='product-ratting'>Ratting: {ratings} Start</p>
        </div>
        <button className='btn-cart'>Add to Cart</button>
    </div>
  )
}

export default Products