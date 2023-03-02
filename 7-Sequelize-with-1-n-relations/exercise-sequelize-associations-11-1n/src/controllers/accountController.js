const { Account, Profile } = require('../models');

const getAccountById = async (req, res) => {
  try {
    const listComments = await Account.findAll({
      where: { id: req.params.id },
      include: [{ model: Profile, as: 'profile' }],
    });

    if (!listComments.length) {
      return res.status(404).send({ message: 'Nenhuma conta cadastrada' });
    }

    return res.status(200).json(listComments[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};
const getAccountByIdLazy = async (req, res) => {
  try {
    const listComments = await Account.findAll({
      where: { id: req.params.id },
    });

    if (!listComments.length) {
      return res.status(404).send({ message: 'Nenhuma conta cadastrada' });
    }

    return res.status(200).json(listComments[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

const create = async (req, res) => {
  const newAccount = req.body;
  try {
    const createdUser = await Account.create(newAccount);
    return res.status(201).json(createdUser);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

module.exports = {
  getAccountById,
  getAccountByIdLazy,
  create,
};
