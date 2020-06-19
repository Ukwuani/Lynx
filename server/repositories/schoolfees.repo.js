const {transactions} = require("../models")
const {payDetails} = require("../models/aficastalking.model")
module.exports = {
    async createTransaction(req) {
        return await transactions.insert(req);
    },

    async updateTransaction(phoneNo, req) {
        return await transactions.update({phoneNumber: phoneNo}, {$set: req}, {}, (err, numberReplaced) => {
            if (err != null) {
                console.log(err)
            }

        });
    },

    //Payments data assembly
    async articulatePay(phoneNumber) {
        return await transactions.findOne({phoneNumber: phoneNumber}, (err, doc) => {
            if (doc != null) {
                payDetails.paymentCard = doc;
                return payDetails
            }
        })
    }
}