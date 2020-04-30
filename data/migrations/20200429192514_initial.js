exports.up = async function (knex) {
    await knex.schema.createTable("zoos", (table) => {
        table.increments("id");
        table.text("name").notNullable();
        table.text("address").notNullable().unique();
    });
    await knex.schema.createTable("species", (table) => {
        table.increments("id");
        table.text("name").notNullable().unique();
    });
    await knex.schema.createTable("animals", (table) => {
        table.increments("id");
        table.text("name").notNullable().unique();
        table
            .integer("species_id")
            .references("id")
            .inTable("species")
            .onDelete("SET NULL"); //creates relationship between tables //reference option here too
    });
    await knex.schema.createTable("zoos_animals", (table) => {
        table.integer("zoo_id").references("id").inTable("zoos");
        table.integer("animal_id").references("id").inTable("animals");
        table.date("from_date").defaultTo(knex.raw("current_timestamp"));
        //knex.raw will pass "current_timestamp" without quotes, meaning it's an internal SQL variable and not a literal string
        table.date("to_date");
        table.primary(["zoo_id", "animal_id"]);
        //this is the primary key of a join table since the table doesn't have an incrementing integer. it combines two tables foreign keys to make a single primary key
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("zoos_animals");
    await knex.schema.dropTableIfExists("animals");
    await knex.schema.dropTableIfExists("species");
    await knex.schema.dropTableIfExists("zoos");
};
