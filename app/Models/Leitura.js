'use strict'

const Model = use('Model')

class Leitura extends Model {
  static get table () {
    return 'leituras'
  }

  static get dates () {
    return super.dates.concat(['data_leitura'])
  }
}

module.exports = Leitura
