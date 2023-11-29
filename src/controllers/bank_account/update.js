const knex = require('../../conexao')
const bcrypt = require('bcrypt')

const updateAccount = async (req, res)=> {
    
    const {name, cpf, birth_date, phone, email, password} = req.body
    const {number_account} = req.params

    if(!number_account){
        return res.status(400).json({message: "Number account are mandatory" })
    }

    try{

        const secretPassword = bcrypt.hash(password, 10)

        const updatedClient = await knex('accounts')
        .where('number_account', '=', number_account)
        .update({
            name: name,
            cpf: cpf,
            birth_date: birth_date,
            phone: phone,
            email: email,
            password: secretPassword
        })

        
        return res.status(200).json(updatedClient);
    }catch(error){
        return res.status(500).json(error.message) 
    }
  

}

module.exports = updateAccount