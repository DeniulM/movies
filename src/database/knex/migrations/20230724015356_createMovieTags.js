exports.up = knex => knex.schema.createTableIfNotExists("movie_tags", table => {
    table.increments("id");
    table.text("name").notNullable();
    table.integer("note_id").references("id").inTable("movie_notes").onDelete("CASCADE");
    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE");
});

exports.down = knex => knex.schema.dropTable("movie_tags");