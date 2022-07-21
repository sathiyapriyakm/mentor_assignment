import { MongoClient } from "mongodb";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo DB connected,");
  return client;
}

export const client = await createConnection();

app.listen(process.env.PORT, () => {
    console.log("Listening to requests....", process.env.PORT);
  });

app.get("/", (req, res) => {
  res.send("Welcome to mentor assignment APP");
});

