const express = require("express");
const cors = require("cors");

require("dotenv").config();

const port = process.env.PORT || 3000;


const app = express();

const db = require("./database/index");

const users_routes = require("../server/routes/usersRoutes")
const posts_routes = require("../server/routes/postsRoutes")
const comment_routes = require("../server/routes/commentRoutes")


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

//routes
app.use('/api',users_routes)
app.use('/api/', posts_routes);
app.use('/api/',comment_routes);


app.listen(PORT, function () {
  console.log("Listening on port 3000!");
});
