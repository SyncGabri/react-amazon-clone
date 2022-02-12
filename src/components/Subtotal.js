import React from 'react';
import '../css/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';

function Subtotal() {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal-gift'>
                            <input className='subtotal-gift-input' type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
            />
            <button className='subtotal-btn-checkout'>
                Proceed to checkout
            </button>
        </div>
    )
}

export default Subtotal