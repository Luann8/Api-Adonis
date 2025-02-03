'use strict'

const Leitura = use('App/Models/Leitura')

class LeiturasController {
  async index ({ response }) {
    const leituras = await Leitura.all()
    return response.status(200).json(leituras)
  }

  async store ({ request, response }) {
    const dados = request.only(['titulo', 'descricao', 'data_leitura'])
    const leitura = await Leitura.create(dados)
    return response.status(201).json(leitura)
  }

  async show ({ params, response }) {
    const leitura = await Leitura.find(params.id)
    if (!leitura) {
      return response.status(404).json({ message: 'Leitura não encontrada' })
    }
    return response.status(200).json(leitura)
  }

  async update ({ params, request, response }) {
    const leitura = await Leitura.find(params.id)
    if (!leitura) {
      return response.status(404).json({ message: 'Leitura não encontrada' })
    }
    const dados = request.only(['titulo', 'descricao', 'data_leitura'])
    leitura.merge(dados)
    await leitura.save()
    return response.status(200).json(leitura)
  }

  async destroy ({ params, response }) {
    const leitura = await Leitura.find(params.id)
    if (!leitura) {
      return response.status(404).json({ message: 'Leitura não encontrada' })
    }
    await leitura.delete()
    return response.status(200).json({ message: 'Leitura deletada com sucesso' })
  }
}

module.exports = LeiturasController
