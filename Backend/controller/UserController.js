const UserModel = require("../models/user")


class UserController {

  async create(req, res) {
    const user = new UserModel(req.body);
    await user
      .save()
      .then(response => {
        return res.status(200).json("Usuário criado")
      }).catch((err) => {
        return res.status(500).json("Houve um erro ao criar o usuário " + err)
      });
  }

  async update(req, res) {
    await UserModel.update(req.body,
      { where: { id: req.params.id } })
      .then(response => {
        return res.status(200).json(response);
      })
      .catch(error => {
        return res.status(500).json("Houve um erro ao tentar atualizar o usuário " + error);
      });
  }

  async all(req, res) {
    await UserModel.findAll({})
      .then(response => {
        return res.status(200).json(response);
      })
      .catch(error => {
        return res.status(500).json(error);
      });
  }

  async show(req, res) {
    await UserModel.findOne({ where: { nome: req.params.nome} })
      .then(response => {
        if (response)
          return res.status(200).json(response);
        else
          return res.status(404).json({ error: 'Usuário não encontrado' });
      })
      .catch(error => {
        return res.status(500).json(error);
      })
  }

  async delete(req, res) {
    await UserModel.destroy({ where: { id: req.params.id } })
      .then(response => {
        return res.status(200).json(response);
      })
      .catch(error => {
        return res.status(500).json(error);
      })
  }


}

module.exports = new UserController();