const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.listen(PORT, function () {
  console.log("Listening on port 3000!");
});