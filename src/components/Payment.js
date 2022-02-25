
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import "../css/Payment.css";
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import axios from '../axios';
import { db } from '../firebase';


function Payment() {
	
	const [{basket, user}, dispatch] = useStateValue();
	const history = useHistory();

	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);

	const [clientSecret, setClientSecret] = useState(true);
	
	useEffect(() => {
		//generate client secret from stripe whenever the basket changes
		const getClientSecret = async () =>{
			const response = await axios({
				method: 'post',
				//stripe expects a subtotal in subunits of the currency (cents et simila)
				url: `/payments/create?total=${Math.round(getBasketTotal(basket) * 100)}`
			});

			setClientSecret(response.data.clientSecret);
		}
		getClientSecret();
	}, [basket]);

	// console.log("Secret ID:", clientSecret);

	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (event) => {
		event.preventDefault();
		setProcessing(true);

		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement)
			}
		}).then(({ paymentIntent }) =>{
			
			db
				.collection('users')
				.doc(user?.uid)
				.collection("orders")
				.doc(paymentIntent.id)
				.set({
					basket: basket,
					amount: paymentIntent.amount,
					created: paymentIntent.created,
				});

			setSucceeded(true);
			setError(null);
			setProcessing(false);
			
			dispatch({
				type: 'EMPTY_BASKET'
			});

			history.replace('/orders');
		});
	}

	const handleChange = event => {
		//listen changes and display errors
		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	}

	return (
		<div className='payment'>
			<div className='payment-container'>
				<h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
				<div className='payment-section'>
					<div className='payment-title'>
						<h3> Delivery Address </h3>
					</div>
					<div className='payment-address'>
						<p>{user?.email}</p>
						<p>123 React Lane</p>
						<p>Los Angeles, CA</p>
					</div>
				</div>
				<div className='payment-section'>
					<div className='payment-title'>
						<h3> Review items and delivery</h3>
					</div>
					<div className='payment-items'>
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
				<div className='payment-section'>
					<div className='payment-title'>
						<h3>Payment method</h3>
					</div>
					<div className='payment-details'>
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange}/>
							<div className='payment-price-container'>
								<CurrencyFormat 
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={"text"}
									prefix={"$"}
									renderText={(value) => (
										<>
											<h3>Order total: {value}</h3>
										</>
									)}
								/>
								<button disabled={processing || disabled || succeeded}>
										<span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
								</button>
							</div>
							{/* ERRORS */}
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
		)
	}

export default Payment