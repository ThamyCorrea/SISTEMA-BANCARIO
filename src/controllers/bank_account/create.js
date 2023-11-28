const knex = require('../../conexao')
const bcrypt = require('bcrypt')

const createAccount = async (req, res) => {  
    
    const {name, cpf, birth_date, phone, email, password} = req.body

    try {

        const passwordCriptografado = await bcrypt.hash(password, 10)

        const client = await knex('accounts')
    .insert({
        balance: 0,
        client_name: name, 
        client_cpf: cpf, 
        client_birth_date: birth_date, 
        client_phone: phone, 
        client_email: email, 
        client_password: passwordCriptografado
    })
    .returning(['client_name', 'client_cpf', 'client_birth_date', 'client_phone', 'client_email']);

    const clientWithoutPrefix = {
        name: client[0].client_name,
        cpf: client[0].client_cpf,
        birth_date: client[0].client_birth_date,
        phone: client[0].client_phone,
        email: client[0].client_email
    };        
 
    return res.status(201).json(clientWithoutPrefix)
        
    } catch (error) {
        return res.status(201).json(error.message)
    }      
    
}
module.exports = createAccount