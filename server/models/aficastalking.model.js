module.exports = {
    params: (req, {first_result, second_result, sessional_result, cgpa}) => ({
        sessionId: req.sessionId,
        serviceCode: req.serviceCode,
        phoneNumber: req.phoneNumber,
        text: req.text,
        first_result,
        second_result,
        sessional_result,
        cgpa
    }),
    
    payDetails: { 
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
}