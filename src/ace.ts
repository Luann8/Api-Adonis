import { Ignitor } from '@adonisjs/ignitor';
import * as path from 'path';
const { Ioc } = require('@adonisjs/fold');  // Usando require para o Ioc

// Inicia o AdonisJS
new Ignitor(Ioc)
  .appRoot(path.join(__dirname))  // O caminho do diretório do seu app
  .fireAce()  // Carrega os comandos do Ace
  .catch(console.error)  // Em caso de erro, ele vai exibir no console
