import { Request, Response } from 'express';
import { container } from 'tsyringe';

import RedifinirSenhaUsuarioService from '@modules/usuarioToken/services/RedifinirSenhaUsuarioService';

class RedefinirSenhaUsuarioController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { token, senha } = request.body;
    
    const redifinirSenhaUsuario = container.resolve(RedifinirSenhaUsuarioService);

    const usuario = await redifinirSenhaUsuario.execute({
      token,
      senha,
    });

    return response.status(200).json(usuario);
  }
}

export default RedefinirSenhaUsuarioController;
