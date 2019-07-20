module.exports = (app, db, ussd) => {
    app.post("/ussd",  (req,  res) => {
            res.send(`Africa's Talking Setup ${req.body}`)
            const params = {
                sessionId: req.body.sessionId,
                serviceCode: req.body.serviceCode,
                phoneNumber: req.body.phoneNumber,
                text: req.body.text
            };
            ussd.handler(params, next(err))

            
    })



}