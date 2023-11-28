const express = require("express");

const routes = express();

const {balanceAccount, createAccount, deleteAccount, searchAccount, statementAccount, updateAccount} = require('./controllers/bank_account/indexAccount')
const {deposit_account, transfer_account, twithdraw_account} = require('./controllers/bank_transaction/index_transaction')
const validationClient = require('./middleware/validation_client')

routes.get("/accounts", searchAccount);
routes.get("/accounts/balance",  balanceAccount );
routes.get("/accounts/statement", statementAccount);
routes.post("/accounts", validationClient, createAccount);
routes.put("/accounts/:number_account/user", updateAccount);
routes.delete("/accounts/:number_account", deleteAccount);

routes.post("/transactions/deposit", deposit_account);
routes.post("/transactions/twithdraw",  twithdraw_account);
routes.post("/transactions/transfer", transfer_account);


module.exports = routes;