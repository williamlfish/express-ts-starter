import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

const port = process.env.PORT as string;

//simple health check route for kube
app.get("/ping", (req, res) => {
  res.sendStatus(200);
});

app.use(cors());

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

const server = app.listen(port, async () => {
  try {
    // Do any other initialization here ( like setting up db pools/whatever other connections)
    console.log(`Server is running on port ${port}`);
  } catch (e) {
    console.error("There was an init error error:", e);
    server.close();
  }
});
