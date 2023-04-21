const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passportConfig = require("./lib/passportConfig");
const cors = require("cors");
const fs = require("fs");


// const MongoURI= process.env.MONGO_URL;
const USERNAME= process.env.USERNAME;
const PASSWORD= process.env.PASSWORD

const MONGO_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-icyvwji-shard-00-00.9sa8wmq.mongodb.net:27017,ac-icyvwji-shard-00-01.9sa8wmq.mongodb.net:27017,ac-icyvwji-shard-00-02.9sa8wmq.mongodb.net:27017/?ssl=true&replicaSet=atlas-9shj5d-shard-0&authSource=admin&retryWrites=true&w=majority`

mongoose
.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((res) => console.log("Connected to DB"))
  .catch((err) => console.log(err));

// initialising directories
if (!fs.existsSync("./public")) {
  fs.mkdirSync("./public");
}
if (!fs.existsSync("./public/resume")) {
  fs.mkdirSync("./public/resume");
}
if (!fs.existsSync("./public/profile")) {
  fs.mkdirSync("./public/profile");
}

const app = express();
const port = 5000;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Setting up middlewares
app.use(cors());
app.use(express.json());
app.use(passportConfig.initialize());


//Express route definitions
app.get("/", (req, res) => {
  res.send("Hi");
});
// Routing
app.use("/auth", require("./routes/authRoutes"));
app.use("/api", require("./routes/apiRoutes"));
app.use("/upload", require("./routes/uploadRoutes"));
app.use("/host", require("./routes/downloadRoutes"));

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
