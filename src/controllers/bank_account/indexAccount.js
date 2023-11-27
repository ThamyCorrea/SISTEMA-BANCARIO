const deleteAccount = require('../bank_account/delete')
const balanceAccount = require('../bank_account/balance')
const createAccount = require('../bank_account/create')
const searchAccount = require('../bank_account/search')
const statementAccount = require('../bank_account/statement')
const updateAccount = require('../bank_account/update')

module.exports = {
    deleteAccount,
    balanceAccount,
    createAccount,
    searchAccount,
    statementAccount,
    updateAccount
}