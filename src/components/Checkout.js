import React from 'react';
import '../css/Checkout.css';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout-left'>
                <img className='checkout-left-ad' src='' alt='img-ad'/>
                <div>
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