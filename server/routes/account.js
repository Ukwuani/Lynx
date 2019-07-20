const {check, validationResult} = require("express-validator")
module.exports = (app,db) =>{

    app.post("/signup", [check("email").isEmail()], (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) {
        return res.status(422).json({ err: err.array() });
    }
        // req.assert("name");
        // req.assert("email", req.t("EmailCannotBeEmpty")).notEmpty();
        
        // req.sanitize("email").normalizeEmail({ remove_dots: false });
        res.send(`done bro, ${req.url } ${req.body.username}`)
        
        db.users.insert({name:"Zebrudaya Jegs", course:"African tech rel"})

    }, (err) => {console.log(e)})
}