import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CriarEstabelecimentoService from '@modules/estabelecimentos/services/CriarEstabelecimentoService';
import AlterarEstabelecimentoService from '@modules/estabelecimentos/services/AlterarEstabelecimentoService';
import ListarEstabelecimentoService from '@modules/estabelecimentos/services/ListarEstabelecimentoService';
import DeletarEstabelecimentoService from '@modules/estabelecimentos/services/DeletarEstabelecimentoService';

class EstabelecimentoController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      descricao,
      inativo,
      ordem,
      codigo_externo
    } = request.body;

    const criarEstabelecimento = container.resolve(CriarEstabelecimentoService);

    const estabelecimento = await criarEstabelecimento.execute({
      descricao,
      inativo,
      ordem,
      codigo_externo
    });

    return response.status(200).json(estabelecimento);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const {
      descricao,
      inativo,
      ordem,
      codigo_externo,
    } = request.body;

    const alterarEstabelecimento = container.resolve(AlterarEstabelecimentoService);

    const estabelecimento = await alterarEstabelecimento.execute({
      id: Number(id),
      descricao,
      inativo,
      ordem,
      codigo_externo,
    });

    return response.status(200).json(estabelecimento);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const listarCategoria = container.resolve(ListarEstabelecimentoService);

    const estabelecimento = await listarCategoria.execute();

    return response.status(200).json(estabelecimento);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteEstabelecimento = container.resolve(DeletarEstabelecimentoService);

    const estabelecimento = await deleteEstabelecimento.execute(Number(id));

    return response.status(200).json(estabelecimento);
  }
}

export default EstabelecimentoController;
