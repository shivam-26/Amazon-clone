const functions = require("firebase-functions");

const express = require("express");
const cors=require("cors");
const stripe = require("stripe")('sk_test_51JrGu4SIaCvnUdaqoWgAF3PCHcjddgeQFjK56nrK5LLaiCBcMeWOn1SSn2oot5QQ3dUFl1ThncA2iisRJfL1CmRO009j8iJH83');


// API

// - APP Config
const app = express();


// - Middlewares
app.use(cors({origin : true}));
app.use(express.json());

// - App routes
app.get('/',(request , response) => response.status(200).send('Hello World'));

app.post('/payments/create', async ( request , response) =>{
    const total= request.query.total;
    console.log("Payment request recieved for this amount >>>",total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,//subunits of the currency
        currency: "inr",
    });

    //OK Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);


//Example endpoint
//http://localhost:5001/clone-228b7/us-central1/api