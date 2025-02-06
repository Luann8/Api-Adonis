import 'reflect-metadata'
import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register custom bindings here
  }

  public async boot() {
    // IoC container is ready
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // App is going down
  }
}

'use strict';

module.exports = {
  appName: 'App',
  appNamespace: 'App', // Este campo é essencial para evitar o erro
};
