import React from 'react'
import '../css/Product.css';
import { useStateValue } from '../StateProvider';
import RatingStar from "@material-ui/icons/StarRate";

function Product({id, title, image, price, rating}) {
    
    const [{basket}, dispatch] = useStateValue();
    
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }
  
    return (
        <div className='product'>
            <div className='product-info'>
                <p> {title} </p>
                <p className='product-info-price'>
                    <small> $ </small>
                    <strong> {price} </strong>
                </p>
                <div className='product-info-rating'>
                    {Array(rating).fill().map((_, i) => (<p> <RatingStar /> </p>))}
                </div>
            </div>
            <img className='product-image' src={image} alt='img-product'/>
            <button className='product-btn-add' onClick={addToBasket}>
                Add to basket
            </button>
        </div>
    )
}

export default Product