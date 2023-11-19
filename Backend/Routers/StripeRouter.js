const { checkout } = require("../Controllers/StripeController");
const router = require("express").Router();
const Order=require("../Models/OrderModel")
router.post("/create-checkout-session", checkout);

const stripe = require("stripe")(
  "sk_test_51N6wHZSEfojLwnjiNxL9IH5fNjgfepuFb4dQlJmGHKJezKAHrnqQcQfNgEav3DctA3PS6o81Q81n4VAcWuuRYzSQ00RBFlnUHh"
);
const express=require("express");

var endpointSecret ;
// endpointSecret = "whsec_c7b2d8b8745b2e2006ff686776224f8387620616384cf5c96e8d9129957ff061";


const createOder=async(customer,data,lineItems)=>{
 
  const newOrder=new Order({
    userId:customer.metadata.userId,
    customerId:data.customer,
    paymentIntentId:data.payment_intent,
    products:lineItems.data,
    subtotal:data.amount_subtotal,
    total:data.amount_total,
   shipping:data.customer_details,
   payment_status:data.payment_status,
  })
  try{
    const saveorder=await newOrder.save();
    console.log("processed order",saveorder);
  }
  catch(err){
    console.log(err);
  }
  }
  



router.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const sig = req.headers['stripe-signature'];
 
  let data;
  let eventType;
  if(endpointSecret){
    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
      console.log("verified");
  
    } catch (err) {
      console.log(`Webhook Error: ${err.message}`)
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
    data=event.data.object;
    eventType=event.type;
  }
  else{
    data=req.body.data.object;
    // console.log(data);
    eventType=req.body.type;
  }

if(eventType==='checkout.session.completed'){
  // const customer = await stripe.customers.retrieve(
  //   'cus_9s6XKzkNRiz8i3'
  // );
  console.log("data:::",data);
  stripe.customers.retrieve(data?.customer).then((customer)=>
  {
    console.log("customer::",customer);
    stripe.checkout.sessions.listLineItems(
      data.id,
      {  },
      function(err, lineItems) {
        createOder(customer,data,lineItems)
      }
    );
    

  }
  ).catch((err)=>console.log(err))
}

  res.send();
});


module.exports = router;
