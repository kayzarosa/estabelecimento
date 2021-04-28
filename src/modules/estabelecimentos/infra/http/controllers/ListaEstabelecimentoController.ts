import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListarEstabelecimentoAtivasService from '@modules/estabelecimentos/services/ListarEstabelecimentoAtivasService';

class ListaEstabelecimentoController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { idEmpresa } = request.params;

    const listarEstabelecimentos = container.resolve(ListarEstabelecimentoAtivasService);

    const estabelecimentos = await listarEstabelecimentos.execute();

    return response.status(200).json(estabelecimentos);
  }
}

export default ListaEstabelecimentoController;
