const { Router } = require("express");

const usersRoute = require("./users.routes");

const route = Router();

route.use("/users", usersRoute);

module.exports = route;