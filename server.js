import { Ignitor } from '@adonisjs/ignitor';
import path from 'path';

new Ignitor(require('@adonisjs/fold'))
  .appRoot(path.join(__dirname))  // Certifique-se de que __dirname é compatível com o TypeScript
  .fireHttpServer()
  .catch(console.error);
  import { Ignitor } from '@adonisjs/ignitor';
  import path from 'path';
  
  new Ignitor(require('@adonisjs/fold'))
    .appRoot(path.join(__dirname))  // Certifique-se de que __dirname é compatível com o TypeScript
    .fireHttpServer()
    .catch(console.error);
  