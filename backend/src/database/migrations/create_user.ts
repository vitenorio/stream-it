import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('image').nullable()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('password').notNullable()
        table.string('work').nullable()
        table.string('github').nullable()
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('users')
}