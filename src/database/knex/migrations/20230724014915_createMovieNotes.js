exports.up = knex => knex.schema.createTableIfNotExists("movie_notes", table => {
   table.increments("id");
   table.text("name");
   table.text("description");
   table.integer("rating");
   table.integer("user_id").references("id").inTable("users");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
});


exports.down = function(knex) {
  
};
