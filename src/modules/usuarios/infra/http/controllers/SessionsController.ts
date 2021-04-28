import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AutenticarUsuarioService from '@modules/usuarios/services/AutenticarUsuarioService';

class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { cpf_cnpj, email, senha } = request.body;

    const autenticarUsuario = container.resolve(AutenticarUsuarioService);

    const { usuario, token } = await autenticarUsuario.execute({
      cpf_cnpj,
      email,
      senha,
    });

    return response.json({ usuario: classToClass(usuario), token });
  }
}

export default SessionsController;
