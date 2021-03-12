const AddressModel = require("../models/address")


class AddressController {

    async create(req, res) {
        const address = new AddressModel(req.body);
        await address
            .save()
            .then(response => {
                return res.status(200).json("Endereço criado")
            }).catch((err) => {
                return res.status(500).json("Houve um erro ao criar o endereço: " + err)
            });
    }

    async update(req, res) {
        await AddressModel.update(req.body,
            { where: { id: req.params.id } })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json("Houve um erro ao tentar atualizar o endereço " + error);
            });
    }

    async all(req, res) {
        await AddressModel.findAll({})
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async show(req, res) {
        await AddressModel.findAll({ where: { idUser: req.params.idUser } })
          .then(response => {
            if (response)
              return res.status(200).json(response);
            else
              return res.status(404).json({ error: 'Endereço não encontrado' });
          })
          .catch(error => {
            return res.status(500).json(error);
          })
      }
    
    async delete(req, res) {
        await AddressModel.destroy({ where: { id: req.params.id } })
          .then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error);
          })
      }
}


module.exports = new AddressController();