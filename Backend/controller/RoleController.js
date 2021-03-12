const RoleModel = require("../models/role")


class RoleController {

    async create(req, res) {
        const address = new RoleModel(req.body);
        await address
            .save()
            .then(response => {
                return res.status(200).json("Regra criado")
            }).catch((err) => {
                return res.status(500).json("Houve um erro ao criar a regra " + err)
            });
    }

    async update(req, res) {
        await RoleModel.update(req.body,
            { where: { id: req.params.id } })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json("Houve um erro ao tentar atualizar a regra: " + error);
            });
    }

    async all(req, res) {
        await RoleModel.findAll({})
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async show(req, res) {
        await RoleModel.findOne({ where: { id: req.params.id } })
          .then(response => {
            if (response)
              return res.status(200).json(response);
            else
              return res.status(404).json({ error: 'Regra não encontrada' });
          })
          .catch(error => {
            return res.status(500).json(error);
          })
      }
    
    async delete(req, res) {
        await RoleModel.destroy({ where: { id: req.params.id } })
          .then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error);
          })
      }
}


module.exports = new RoleController();