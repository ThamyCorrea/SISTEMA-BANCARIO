const deposit = require('../bank_transaction/deposit')
const transfer = require('../bank_transaction/transfer')
const twithdraw = require('../bank_transaction/twithdraw')
const balance = require('../bank_transaction/balance')
const statement = require('../bank_transaction/statement')

module.exports = {
    deposit,
    transfer,
    twithdraw,
    balance,
    statement
}