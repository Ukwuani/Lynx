module.exports = (app, db, ussd) => {
    app.post("/ussd",  (req,  res) => {
    
            const params = {
                sessionId: req.body.sessionId,
                serviceCode: req.body.serviceCode,
                phoneNumber: req.body.phoneNumber,
                text: req.body.text
            };

            if (params.text =="") {
                res.send(`CON Africa's Talking Setup\n
                1.  Africa\n
                2. Chuka`)
            }
            else if(params.text == "1") {
                res.send(`END Africa is a continent `)
            }

            else if(params.text == "2") {
                res.send(`END Chuka built this app `)
            }

            else {
                res.status(400).send('END Bad request for Lynxe');
            }


            
    })

    



}