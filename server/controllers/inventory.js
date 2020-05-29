
module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get('db')

    db.all_inventory()
    .then(products => res.status(200).send(products))
    .catch(err => res.status(500).send(err))
    
  },
  addInventory: (req, res) => {
    const {name, img_url, price} = req.body
    const db = req.app.get('db');

    db.add_product( name, img_url, price)
    .then(product => res.status(200).send(product))
    .catch(err => res.status(500).send(err));
  },

  editInventory: (req, res) => {
    const {id} = req.params;
    const {name, img_url, price} = req.body;
    const db = req.app.get('db');

    db.edit_product(id, name, img_url, price)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err))
  },
  deleteInventory: (req, res) => {
    const {id} = req.params
    const db = req.app.get('db')

    db.delete_product(id)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err))
  }
}