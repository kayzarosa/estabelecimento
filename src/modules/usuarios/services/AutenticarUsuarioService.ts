import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IUsuarioRepositorio from '../repositories/IUsuarioRepositorio';
import IHashProvider from '@shared/container/providers/HashProvider/models/IHashProvider';

import Usuario from '../infra/typeorm/entities/Usuario';

interface IRequest {
  email: string;
  senha: string;
}

interface IResponse {
  usuario: Usuario;
  token: string;
}

@injectable()
class AutenticarUsuarioService {
  constructor(
    @inject('UsuarioRepositorio')
    private usuarioRepositorio: IUsuarioRepositorio,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ email, senha }: IRequest): Promise<IResponse> {
    const usuario = await this.usuarioRepositorio.buscarEmailUsuario(email);

    if (!usuario) {
      throw new AppError('Combinação incorreta de CPF / CNPJ / e-mail / senha.', 401);
    }

    if (!usuario.usuario_ativo) {
      throw new AppError('Usuário não está ativo!', 401);
    }

    const senhaCorrespondente = await this.hashProvider.compareHash(
      senha,
      usuario.senha,
    );

    if (!senhaCorrespondente) {
      throw new AppError('Combinação incorreta de CPF / CNPJ / e-mail / senha.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: String(usuario.id),
      expiresIn,
    });

    return {
      usuario,
      token,
    };
  }
}

export default AutenticarUsuarioService;
