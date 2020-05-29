require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      // ctrl = require('./controllers/'),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      app = express();

app.use(express.json());

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then(db => {
  app.set('db', db);
  console.log('db connected')
})
.catch(err => console.log(err))

app.listen(SERVER_PORT, ()=> console.log(`server is running on port ${SERVER_PORT}`))