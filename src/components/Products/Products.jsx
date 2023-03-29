import React from 'react'
import './Products.css'

const Products = (props) => {
    const {name,price,quantity,img, seller, ratings} = props.product;
  return (
    <div className='product'>
        <img src={img} alt="" />
        <div className="product-info">
        <h6 className='product-name'>{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Ratting: {ratings} Start</p>
        </div>
    </div>
  )
}

export default Products