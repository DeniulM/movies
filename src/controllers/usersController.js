const knex = require("../database/knex");
const AppError = require("../utils/appError")

class UsersController {
    async create(request, response) {
        const {name, email, password, avatar} = request.body;

        const isUserExists = await knex("users").where({email}).first()
            .then(e => console.log(e))
            .catch(e => console.log(e));

        if (isUserExists) throw new AppError("Email já cadastrado");
        await knex("users").insert({
            name,
            email,
            password,
            avatar
        });

        return response.status(201).json()
    }
}

module.exports = UsersController;