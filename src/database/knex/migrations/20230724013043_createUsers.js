exports.up = knex => knex.schema.createTableIfNotExists("users", table => {
    table.increments("id");
    table.text("name").notNullable();
    table.text("email");
    table.text("password");
    table.text("avatar");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("users");