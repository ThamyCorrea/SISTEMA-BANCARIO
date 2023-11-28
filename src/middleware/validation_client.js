const knex = require('../conexao');

const validationClient = async (req, res, next) => {
  const { name, cpf, birth_date, phone, email, password } = req.body;

  if (!name || !cpf || !birth_date || !phone || !email || !password) {
    return res.status(400).json({ error: "All fields are mandatory" });
  }

  const clientWithCpf = await knex('accounts').where('client_cpf', '=', cpf).first();

  if (clientWithCpf) {
    return res.status(409).json({ error: "CPF already exists" });
  }

  const clientWithEmail = await knex('accounts').where('client_email', '=', email).first();

  if (clientWithEmail) {
    return res.status(409).json({ error: "Email already exists" });
  }

  if (!email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i)) {
    return res.status(400).json({ error: "Invalid e-mail format" });
  }

  next();
};

module.exports = validationClient;
