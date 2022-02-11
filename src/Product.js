import React from 'react'
import './Product.css';

function Product({idNum, title, image, price, rating}) {
  return (
    <div className='product'>
        <div className='product-info'>
            <p> {title} </p>
            <p className='product-info-price'>
                <small> $ </small>
                <strong> {price} </strong>
            </p>
            <div className='product-info-rating'>
                {Array(rating).fill().map((_, i) => (<p> :star: </p>))}
            </div>
        </div>
        <img className='product-image' src={image} alt='img-product'/>
        <button className='product-btn-add'>
            Add to basket
        </button>
    </div>
  )
}

export default Product