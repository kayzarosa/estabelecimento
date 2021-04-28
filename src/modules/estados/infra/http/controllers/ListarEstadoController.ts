import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListarEstadosService from '@modules/estados/services/ListarEstadosService';

class ListarEstadoController {
  public async show(request: Request, response: Response): Promise<Response> {
    
    const listarEstados = container.resolve(ListarEstadosService);
    
    const estados = await listarEstados.execute();

    return response.status(200).json(estados);
  }
}

export default ListarEstadoController;
