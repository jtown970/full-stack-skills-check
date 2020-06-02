require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      ctrl = require('./controllers/inventory'),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      app = express();

app.use(express.json());

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then(db => {
  app.set('db', db);
  console.log('db connected')
  app.listen(SERVER_PORT, ()=> console.log(`server is running on port ${SERVER_PORT}`))
})
.catch(err => console.log(err))

app.get(`/api/inventory`, ctrl.getInventory)
app.post(`/api/inventory`, ctrl.addInventory)
app.put(`/api/inventory/:id`, ctrl.editInventory)
app.delete(`/api/inventory/:id`, ctrl.deleteInventory)
