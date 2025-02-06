'use strict'

/*
|---------------------------------------------------------------------------
| Providers
|---------------------------------------------------------------------------
|
| Providers são blocos de construção do seu aplicativo Adonis. Sempre que
| você instala um novo pacote específico do Adonis, provavelmente você irá
| registrar o provider aqui.
|
*/
const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/framework/providers/ViewProvider',
  '@adonisjs/lucid/providers/LucidProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/shield/providers/ShieldProvider',
  '@adonisjs/session/providers/SessionProvider',
  '@adonisjs/auth/providers/AuthProvider'
]

/*
|---------------------------------------------------------------------------
| Ace Providers
|---------------------------------------------------------------------------
|
| Ace providers são necessários apenas ao executar comandos ace. 
| Por exemplo, providers para migrações, testes, etc.
|
*/
const aceProviders = [
  '@adonisjs/lucid/providers/MigrationsProvider'
]

/*
|---------------------------------------------------------------------------
| Aliases
|---------------------------------------------------------------------------
|
| Aliases são nomes curtos e exclusivos para as ligações do IoC container.
| Você pode criar seus próprios aliases aqui.
|
| Exemplo:
|   { Route: 'Adonis/Src/Route' }
|
*/
const aliases = {}

/*
|---------------------------------------------------------------------------
| Commands
|---------------------------------------------------------------------------
|
| Aqui você pode armazenar comandos ace para o seu pacote.
|
*/
const commands = []

module.exports = { providers, aceProviders, aliases, commands }
