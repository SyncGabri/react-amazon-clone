const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const { response } = require("express");
const stripe = require('stripe')('sk_test_51KX1aoFK9A8xsjkQtGFK3Og4sEu3AXJ4ut1Iu79xzD9wFnu3Po5zbFTGlzKHnoB0nCZzFbuE8PAcYAaNsCT4hmQx00prjqejsb');

//API config

//App config
const app = express()

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());


//API routes
// app.get('/', (request, response) => response.status(200).send("hellow!"));

app.post('/payments/create', async (request, response)=>{
    const total = request.query.total;
    
    //console.log('Payment request: ', total);
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});

//Listens commands
exports.api = functions.https.onRequest(app);

//EXAMPLE
//http://localhost:5001/react-amzn-clone-40077/us-central1/api