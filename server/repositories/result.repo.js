const {results} = require("../models")
const result = require("../models/result.model")

module.exports = {

    async createResult(req) {
        return await results.insert(result(req))
    }
}