const {validationResult} = require("express-validator")
const UserRepo = require("../repositories/user.repo")
const ResultRepo = require("../repositories/result.repo")
module.exports= {
    async createAccount(req, res) {
        const err = validationResult(req);
        if (!err.isEmpty())
            return res.status(422).json({ err: err.array() });
        
        await UserRepo.createUser(req.body)
        try {await ResultRepo.createResult(req.body) } catch (err) {
            console.log(err)
        }
        console.log('dddfg')
        return res.json({
            status: 200,
            success: true
        })
    }
}