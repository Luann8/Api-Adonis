'use strict'

const { Ignitor } = require('@adonisjs/ignitor')
const path = require('path')

/*
|----------------------------------------------------------------------
| Configuração do App
|----------------------------------------------------------------------
| O Ignitor é responsável por inicializar e configurar o AdonisJS.
| A configuração do app envolve a inicialização dos Providers e do IoC container.
*/

new Ignitor(require('@adonisjs/fold'))
  .appRoot(path.join(__dirname, '..'))  // Caminho correto para a raiz do projeto
  .getEnv('NODE_ENV', 'development')   // Define o ambiente como "development" por padrão
  .fire()  // Inicializa o AdonisJS e carrega todos os Providers
  .catch(console.error)  // Captura erros durante a inicialização
