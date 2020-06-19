const {check} = require("express-validator");
const {createAccount} = require('../controllers/account.controller')


module.exports = (router) =>{
    app.post(
        "/signup", 
        [
            check('email').isEmail(),
            check('first_name').isLength({min: 2}), 
            check('last_name').isLength({min: 2}),
            check('phone_no').isLength({min: 7}),
            check('matric_no').isLength({min: 2})
        ],
        createAccount
        , (err) => {console.log(err)})

}