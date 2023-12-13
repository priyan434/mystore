
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
  
  
  // const doc = new jsPDF();
  // doc.text(JSON.stringify(saveorder), 10, 10);
  
  // doc.save("a4.pdf"); // will save the file in the current working directory
  const doc = new jsPDF();
  
  // Add order details to the PDF
  
  doc.text("your Order details \n"+"Your email: " + saveorder.email.toString()+"\n\n"+"Your id: "+saveorder.userId.toString()+"\n\n"+"Payment Id: " +saveorder.paymentIntentId.toString()+"\n\n"+"Total amount: "+(saveorder.total/100).toString()+"\n\n"+"Delivery_status: "+saveorder.delivery_status.toString()
  +"\n\n"+"Payment_status: "+saveorder.payment_status.toString(),10,20)
  
  
  doc.save("a4.pdf");
  
  
  
  
  
  
  
  
//   // Create a new jsPDF instance
//   const doc = new jsPDF();
  
//   // Add order details to the PDF
//   doc.text(
//     "Your Order details\n" ,
//     10,
//     20
//   );
  
//   // Save the PDF
//   const pdfBuffer = doc.output();
  
//   // Nodemailer configuration
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'priyanr494@gmail.com',
//       pass: 'fiaa qiro ewwf xdgx',
//     },
//   });
  
//   // Email options
//   const cust_email=saveorder.email
//   console.log("cust_email",cust_email);
//   const mailOptions = {
//     from: 'priyanr494@gmail.com',    // Replace with your email
//     to: cust_email,
//     subject: 'Order Details',
//     text: 'Attached is your order details.',
//     attachments: [
//       {
//         filename: 'order_details.pdf',
//         content: pdfBuffer,
//         encoding: 'base64',
//       },
//     ],
//   };
  
//   // Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//     } else {
//       console.log('Email sent:', info.response);
//     }
//   });
  
    }
    catch(err){
      console.log(err);
    }
    }
    