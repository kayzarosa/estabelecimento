import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListarCidadeService from '@modules/cidades/services/ListarCidadeService';

class ListarCidadeController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { estado_id } = request.params;
    
    const listarCidades = container.resolve(ListarCidadeService);
    
    const cidades = await listarCidades.execute(Number(estado_id));

    return response.status(200).json(cidades);
  }
}

export default ListarCidadeController;
