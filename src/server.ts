import { Ignitor } from '@adonisjs/ignitor';
import * as path from 'path';
const { Ioc } = require('@adonisjs/fold');  // Usando require para o Ioc

new Ignitor(Ioc)
  .appRoot(path.join(__dirname))  // Certifique-se de que __dirname é compatível com o TypeScript
  .fireHttpServer()
  .catch(console.error);
