const knex = require('../../conexao')


const searchAccount = async (req, res) => {

    const {bank_password} = req.query

    const {password}= await knex('bank').first();

       
    if(password !== bank_password){
        return res.status(400).json({mensagem: "Password incorrect"}) 
    }

    const fundAccounts = await knex('accounts') 

      
    return res.status(200).json(fundAccounts)
}

module.exports = searchAccount









