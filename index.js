const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7ihro.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express();


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("volunteer").collection("events");
  // perform actions on the collection object
//   client.close();
});

app.listen(5000);