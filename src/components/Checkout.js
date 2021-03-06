import React from 'react';
import '../css/Checkout.css';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import bannerAd from '../assets/amazon_ad.png';

function Checkout() {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout-left'>
                <img className='checkout-left-ad' src={bannerAd} alt='img-ad'/>
                <div>
                    <h3>Hello, {!user ? 'Guest' : user?.email.split('@')[0]}</h3>
                    <h2 className='checkout-left-title'>
                        Your shopping basket
                    </h2>
                    
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

                </div>
            </div>
            <div className='checkout-right'>
                <Subtotal />
            </div>
            
        </div>
    )
}

export default Checkout