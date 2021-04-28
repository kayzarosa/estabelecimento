import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AlterarSenhaUsuarioService from '@modules/usuarios/services/AlterarSenhaUsuarioService';

class AlterarSenhaUsuarioController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { senha } = request.body;
    const { usuarioId } = request.params;

    const alterarSenha = container.resolve(AlterarSenhaUsuarioService);

    const usuario = await alterarSenha.execute({
      usuarioId: Number(usuarioId),
      senha,
    });

    return response.status(200).json(classToClass(usuario));
  }
}

export default AlterarSenhaUsuarioController;