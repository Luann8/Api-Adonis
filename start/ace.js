const { Ignitor } = require('@adonisjs/ignitor')
const path = require('path')

new Ignitor(require('@adonisjs/fold'))
  .appRoot(path.join(__dirname, 'C:/Users/luann/OneDrive/Documentos/GitHub/novo-projeto'))  // Use barras normais ou barras invertidas duplicadas
  .fireAce()  // Inicializa o ace
  .catch(console.error)
