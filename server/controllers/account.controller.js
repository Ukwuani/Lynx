const {validationResult} = require("express-validator")
const ResultRepo = require("../repositories/user.repo")
const result = require("../models/result.model")
module.exports= {
    async createAccount(req, res) {
        const err = validationResult(req);
        if (!err.isEmpty())
            return res.status(422).json({ err: err.array() });

        
        return res.json({
            status: 200,
            success: true
        })

        ResultRepo.createUser(user(req.body))

        db.users.insert(req.body)
        uploadResult(req.body.phone_no,  req.body.matric_no)

    }
}