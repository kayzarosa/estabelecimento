import { Request, Response } from 'express';
import { container } from 'tsyringe';

import RecuperacaoSenhaUsuarioService from '@modules/usuarioToken/services/RecuperacaoSenhaUsuarioService';

class RecuperacaoSenhaUsuarioController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { cpf_cnpj, email } = request.body;

    const recuperacaoSenhaUsuario = container.resolve(RecuperacaoSenhaUsuarioService);

    const empresa = await recuperacaoSenhaUsuario.execute({
      cpf_cnpj,
      email
    });

    return response.status(200).json(empresa);
  }
}

export default RecuperacaoSenhaUsuarioController;
