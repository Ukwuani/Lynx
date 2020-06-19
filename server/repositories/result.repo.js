const {results} = require("../models")
const resultmodel = require("../models/result.model")

module.exports = {

    async createResult(req) {
        console.log(resultmodel(req))
        return await results.insert(resultmodel(req))
    }
}