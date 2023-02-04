const validateName = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({message: 'O campo name é obrigatório'});
  }
  const {name} = req.body;
  if (name.length < 4) {
    return res
      .status(400)
      .json({message: 'O campo name deve ter pelo menos 4 caracteres'});
  }
  return next();
};

module.exports = validateName;
