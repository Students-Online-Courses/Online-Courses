const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000
const db = require("./database/index");
const users_routes = require("../server/routes/usersRoutes")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use('/api',users_routes)
app.listen(PORT, function () {
  console.log("Listening on port 3000!");
});