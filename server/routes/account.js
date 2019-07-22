const {check, validationResult} = require("express-validator");

const result = {
    matric_no: null,
    phone_no:null,
    first_semester:[`CSE 401  79  A\n `, `CSE 405  79  B\n `, `CSE 421  79  C\n `, `CSE 445  79  A\n `, `CSE 423 79  A\n `],
    second_semester: [`CSE 402  79  A\n `, `CSE 406  79  C\n `, `CSE 422  79  D\n `, `CSE 446 79  D\n `, `CSE 424  79  A\n `],
    cgpa: `3.45`
}



module.exports = (app,db) =>{
    const hfunc = 21;
    const pkey = "l";

    const uploadResult = (phone_nu,  matric_nu) => {
        db.results.insert({matric_no: matric_nu, 
            phone_no:phone_nu, 
            first_semester: result.first_semester, 
            second_semester: result.second_semester, 
            cgpa: result.cgpa})
    }

    app.post("/signup", [check('email').isEmail(),
    check('first_name').isLength({min: 2}), 
    check('last_name').isLength({min: 2}),
    check('phone_no').isLength({min: 7}),
    check('matric_no').isLength({min: 2})
], (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) {
        return res.status(422).json({ err: err.array() });
    }

        res.send(`done`)

        db.users.insert({
            first_name:`${req.body.first_name}`,
            last_name:`${req.body.last_name}`,
            email:`${req.body.email}`,
           matric_no :`${req.body.matric_no}`,
           phone_no:`${req.body.phone_no}`
        })
        uploadResult(req.body.phone_no,  req.body.matric_no)

    }, (err) => {console.log(err)})


}