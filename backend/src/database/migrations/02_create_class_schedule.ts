import Knex from 'knex';

export async function up(knex : Knex) {
    return knex.schema.createTable('classes_shedule', table =>  {
        table.increments('id').primary();
        
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();
       
        table.integer('class_id')
        .notNullable()
        .references('id')
        .inTable('classes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

    })
}

export async function down(knex : Knex) {
    return knex.schema.dropTable('classes_shedule');
}