const { Comment } = require('../models');

const getCommentsByAccId = async (req, res) => {
  try {
    const listComments = await Comment.findAll({
      where: { accountId: req.params.id },
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
  try {
    const { id } = req.params;
    const newComment = req.body;
    newComment.upvoting = 0;
    newComment.downvoting = 0;
    newComment.accountId = id;
    console.log(newComment);
    const createdComment = await Comment.create(newComment);
    return res.status(201).json(createdComment);
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = {
  getCommentsByAccId,
  create,
};
