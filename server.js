require("dotenv").config();
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.Mongo_URI);

const express = require("express");
const { response } = require("express");
const app = express();

const port = 3333;
app.get("/", (request, response) => {
  console.log("Request /");
  response.send("Request sleep");
});

app.listen(port, () => {
  console.log(`dubidu I´m listen to you on http://localhost:${port}`);
});

// async function run() => {
//     try {
//         await client.connect();
//         const database = client.db(process.env.Mongo_DB_NAME);
//     } finally {
//         await client.close();
//     }
// }
