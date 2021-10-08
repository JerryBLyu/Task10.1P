const express = require("express");
const app = express();
const cors = require("cors");

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/iService", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", require("./routes.js"));


const port = 5000;
app.listen(port, "127.0.0.1", () => {
  console.log(`Server Listening on ${port}`);
});
