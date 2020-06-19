const {users} = require('../models')
const usermodel = require("../models/user.model")


module.exports = {

    async createUser(req) {
        return await users.insert(usermodel(req))
    }
}