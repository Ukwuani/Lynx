module.exports = (app, db, atAPI) => {

    //USSD POST
    app.post("/ussd",  (req,  res) => {
            //Parameters
            const params = {
                sessionId: req.body.sessionId,
                serviceCode: req.body.serviceCode,
                phoneNumber: req.body.phoneNumber,
                text: req.body.text,
                first_result: null,
                second_result: null,
                sessional_result: null
            };

            //Payment Details
            const payDetails = { 
                productName: "School Fees",
                //Payment Card Details
                 paymentCard: {
                    cardNumber: null,
                    cvvNumber: null,
                    expiryMonth: 1,
                    expiryYear:  2019,
                    countryCode: "NG",
                    authToken: null
                 }, 
                 currencyCode: "NGN", 
                 amount: 21000, 
                 narration: "unilorin school fees", 
                 metadata: {} }


                   //Create Transaction Object for transactions
    const Transaction = {
        createTransaction: (result) => {
            db.transactions.insert(result);
        },
        updateTransaction: (phoneNo, result) => {
            db.transactions.update({phoneNumber: phoneNo}, {$set: result}, {}, (err, numberReplaced) => {
                if (err != null) {
                    console.log(err)
                }

            });
    },
    //Payments data assembly
    articulatePay: (phoneNumber) => {
        db.transactions.findOne({phoneNumber: phoneNumber}, (err, doc) => {
            if (doc != null) {
                payDetails.paymentCard = doc;
            }
        })
    }
}

            //Result DB Invocation et query
            db.results.findOne({phone_no: req.body.phoneNumber}, (err, doc) => {
                if (doc != null) {
                    params.first_result = ` ${doc.first_semester.toString().replace(/\,/g, "")}\n CGPA= ${doc.cgpa}`;
                    params.second_result =`${ doc.second_semester.toString().replace(/\,/g, "")}\n CGPA= ${doc.cgpa}`;
                    params.sessional_result = `${doc.first_semester.toString().replace(/\,/g, "")}\n ${doc.second_semester.toString().replace(/\,/g ,"")} `
                }
            } )


            //users DB Invocation et query TODO: To be converted to switch
            db.users.findOne({phone_no: `${req.body.phoneNumber}` }, (err, doc) => {
                if (err != null) {
                    res.send(`an error occured with Lynxe`)
                } 
               else if (params.text =="" && doc != null) {
                    res.send(`CON Hello, ${doc.matric_no} what do you want to check?\n
                    1. Check Results\n
                    2. Pay School Fees\n
                    3. Check Student Status\n
                    4. Subscribe to News`)
                }
    
                else if(params.text == "1" && doc != null) {
                    res.send(`CON How do you want to view it?\n
                    1. 1st Semester\n
                    2. 2nd Semester\n
                    3. Session`)
                }
    
                else if (params.text =="1*1" && doc != null) {
                    res.send(`END ${params.first_result} `)
                }

                else if (params.text =="1*2" && doc != null) {
                    res.send(`END ${params.second_result} `)
                }

                else if (params.text =="1*3" && doc != null) {
                    res.send(`END ${params.sessional_result} `)
                }

                else if(params.text == "2" && doc != null) {
                    res.send(`CON Enter your card number to pay ${payDetails.currencyCode}${payDetails.amount} `)
                }

                else if (params.text[0] =="2" && params.text.length >= 10) {
                    res.send(`CON Enter the expiry date\n
                    eg. (01/2019)`)

                    payDetails.paymentCard.cardNumber = params.text.substring(2)
                    payDetails.paymentCard.phoneNumber = params.phoneNumber;
                    Transaction.createTransaction(payDetails.paymentCard);
                    
                }

                else if (params.text[0] =="2" && params.text.includes('/')) {
                    res.send("CON Enter the cvv")
                    Transaction.updateTransaction(params.phoneNumber, {expiryMonth: params.text.split("/")[0].substring(2), expiryYear: params.text.split("/")[1]})
                }

                else if (params.text[0] =="2" && params.text.length === 5) {
                    res.send("Your Request was recieved and being processed, you will get an SMS soon")
                    Transaction.updateTransaction(params.phoneNumber, {cvvNumber: params.text.substring(2)})
                    Transaction.articulatePay(params.phoneNumber)
                    atAPI.payment.cardCheckoutCharge(payDetails)
                }   

            else {
                res.status(400).send('END Bad request for Lynxe');
            }
                
                
              });

          

            
    })


  
   


        
}
