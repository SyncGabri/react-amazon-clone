import React from 'react';
import '../css/Order.css';
import moment from "moment";
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
  return (
    <div className='order'>
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
        <p className='order-id'>
            <small>{order.id}</small>
        </p>
        {order.data.basket?.map(item => (
            <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                hideButton={true}
            />
        ))}
        <CurrencyFormat 
            decimalScale={2}
            value={order.data.amount / 100}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            renderText={(value) => (
                <>
                    <h3 className='order-total'>Order total: {value}</h3>
                </>
            )}
        />
    </div>
  )
}

export default Order