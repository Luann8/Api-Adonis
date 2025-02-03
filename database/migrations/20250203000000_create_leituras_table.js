'use strict'

const Schema = use('Schema')

class LeiturasSchema extends Schema {
  up () {
    this.create('leituras', (table) => {
      table.increments()
      table.string('titulo').notNullable()
      table.text('descricao').notNullable()
      table.date('data_leitura').notNullable()
      table.timestamps(true) // Cria campos created_at e updated_at
    })
  }

  down () {
    this.drop('leituras')
  }
}

module.exports = LeiturasSchema
