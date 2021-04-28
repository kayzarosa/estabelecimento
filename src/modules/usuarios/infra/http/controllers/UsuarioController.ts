import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CriarUsuarioService from '@modules/usuarios/services/CriarUsuarioService';

class UsuarioController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      cpf_cnpj,
      nome_razao_social,
      email,
      senha,
    } = request.body;
    
    const criarUsuario = container.resolve(CriarUsuarioService);
    
    const user = await criarUsuario.execute({
      cpf_cnpj,
      nome_razao_social,
      email,
      senha,
    });

    return response.status(200).json(classToClass(user));
  }
}

export default UsuarioController;
