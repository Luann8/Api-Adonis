// app.js
const { Ignitor } = require('@adonisjs/ignitor')
const path = require('path')

// Caminho da raiz da aplicação
const appRoot = path.join(__dirname)

// Inicializando o servidor do AdonisJS
new Ignitor(require('@adonisjs/fold'))
  .appRoot(appRoot)
  .fire()  // Inicia a aplicação
  .catch(console.error)
