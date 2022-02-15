import React from 'react'
import '../css/CheckoutProduct.css';
import { useStateValue } from '../StateProvider';
import RatingStar from "@material-ui/icons/StarRate";

function CheckoutProduct({id, title, image, price, rating}) {
    
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    
    return (
        <div className='checkout-product'>
            <img className='checkout-product-image' src={image} alt='img-product'/>
            <div className='checkout-product-info'>
                <p className='checkout-product-info-title'>{title}</p>
                <p className='checkout-product-info-price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkout-product-info-rating'>
                    {Array(rating).fill().map((_, i) => (<p><RatingStar /></p>))}
                </div>
                <button className='checkout-product-btn-remove' onClick={removeFromBasket}>
                    Remove from basket
                </button>
            </div>
        </div>
    )
}

export default CheckoutProduct