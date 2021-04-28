import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AlterarUsuarioService from '@modules/usuarios/services/AlterarUsuarioService';

class AlterarUsuarioController {
  public async update(request: Request, response: Response): Promise<Response> {
    const {
      cpf_cnpj,
      nome_razao_social,
      apelido_nome_fantasia,
      logradouro,
      numero,
      complemento,
      cep,
      bairro,
      estado_id,
      cidade_id,
      email,
      telefone
    } = request.body;

    const alterarUsuario = container.resolve(AlterarUsuarioService);

    const usuario = await alterarUsuario.execute({
      cpf_cnpj,
      nome_razao_social,
      apelido_nome_fantasia,
      logradouro,
      numero,
      complemento,
      cep,
      bairro,
      estado_id: Number(estado_id),
      cidade_id: Number(cidade_id),
      email,
      telefone
    });

    return response.status(200).json(classToClass(usuario));
  }
}

export default AlterarUsuarioController;