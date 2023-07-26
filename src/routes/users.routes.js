const { Router } = require("express");

const UsersController = require("../controllers/usersController");

const usersRoute = Router();

const usersController = new UsersController();

usersRoute.get("/", usersController.create);

module.exports = usersRoute;