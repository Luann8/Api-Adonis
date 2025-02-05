import { Ignitor } from '@adonisjs/ignitor';
import path from 'path';
import { Ioc } from '@adonisjs/fold';  // Se precisar importar o Ioc

new Ignitor(Ioc)
  .appRoot(path.join(__dirname))  // Certifique-se de que __dirname é compatível com o TypeScript
  .fireHttpServer()
  .catch(console.error);
