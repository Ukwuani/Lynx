module.exports = (app, db, ussd) => {
    app.post("/ussd",  (req,  res) => {
            const params = {
                sessionId: req.body.sessionId,
                serviceCode: req.body.serviceCode,
                phoneNumber: req.body.phoneNumber,
                text: req.body.text,
                first_result: null,
                second_result: null,
                sessional_result: null
            };

            db.results.findOne({phone_no: req.body.phoneNumber}, (err, doc) => {
                if (doc != null) {
                    params.first_result = ` ${doc.first_semester.toString().replace(/\,/g, "")}\n CGPA= ${doc.cgpa}`;
                    params.second_result =`${ doc.second_semester.toString().replace(/\,/g, "")}\n CGPA= ${doc.cgpa}`;
                    sessional_result = `${doc.first_semester.toString().replace(/\,/g, "")}\n ${doc.second_semester.toString().replace(/\,/g ,"")} `
                }
            } )


            db.users.findOne({phone_no: `${req.body.phoneNumber}` }, function (err, doc) {
                if (err != null) {
                    res.send(`an error occured with Lynxe`)
                } 
               else if (params.text =="" && !doc.isEmpty()) {
                    res.send(`CON Hello, ${doc.matric_no} what do you want to check?\n
                    1. Result\n
                    2. School Fees`)
                }
    
                else if(params.text == "1" && !doc.isEmpty()) {
                    res.send(`CON How do you want to view it?\n
                    1. 1st Semester\n
                    2. 2nd Semester\n
                    3. Session`)
                }
    
                else if(params.text == "2" && !doc.isEmpty()) {
                    res.send(`END Choose your bank `)
                }
    
                else if (params.text =="1*1" && !doc.isEmpty()) {
                    res.send(`END ${params.first_result} `)
                }

                else if (params.text =="1*2" && !doc.isEmpty()) {
                    res.send(`END ${params.second_result} `)
                }

                else if (params.text =="1*3" && !doc.isEmpty()) {
                    res.send(`END ${params.sessional_result} `)
                }

            else {
                res.status(400).send('END Bad request for Lynxe');
            }
                
                
              });

          



            
    })

    


        
}
