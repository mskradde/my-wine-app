require("dotenv").config();
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.Mongo_URI);

async function run() => {
    try {
        await client.connect();
        const database = client.db(process.env.Mongo_DB_NAME);
    } finally {
        await client.close();
    }
}