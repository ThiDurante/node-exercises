const validateDescription = (req, res, next) => {
  const {description} = req.body;
  if (!description) {
    return res.status(400).json({message: 'O campo description é obrigatório'});
  }

  const checkKeys = ['rating', 'difficulty', 'createdAt'];
  for (let i = 0; i < checkKeys.length; i++) {
    const key = checkKeys[i];
    if (!(key in description)) {
      return res.status(400).json({message: `O campo ${key} é obrigatório`});
    }
  }
  // checkKeys.map((key) => {
  //   if (!(key in description)) {
  //     return res.status(400).json({message: `O campo ${key} é obrigatório`});
  //   }
  // });
  next();
};

module.exports = validateDescription;
