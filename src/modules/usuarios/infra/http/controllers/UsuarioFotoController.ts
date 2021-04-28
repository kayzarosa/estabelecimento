import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import UpdateFotoServise from '@modules/usuarios/services/UpdateFotoServise';

class UsuarioFotoController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateFoto = container.resolve(UpdateFotoServise);

    const usuario = await updateFoto.execute({
      usuarioId: request.usuario.id,
      foto: request.file.filename,
    });

    return response.json(classToClass(usuario));
  }
}

export default UsuarioFotoController;
