import { injectable, inject } from 'tsyringe';
import { differenceInHours } from 'date-fns';

import AppError from '@shared/errors/AppError';
import IHashProvider from '@shared/container/providers/HashProvider/models/IHashProvider';
import IUsuarioRepositorio from '@modules/usuarios/repositories/IUsuarioRepositorio';
import IUsuarioTokenRepositorio from '../repositories/IUsuarioTokenRepositorio';

interface IRequest {
  token: string;
  senha: string;
}

@injectable()
class RedifinirSenhaUsuarioService {
  constructor(
    @inject('UsuarioTokenRepositorio')
    private usuarioTokenRepositorio: IUsuarioTokenRepositorio,

    @inject('UsuarioRepositorio')
    private usuarioRepositorio: IUsuarioRepositorio,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ token, senha }: IRequest): Promise<void> {
    const usuarioToken = await this.usuarioTokenRepositorio.buscarPorToken(token);

    if (!usuarioToken) {
      throw new AppError('Token não encontrado!');
    }

    const usuario = await this.usuarioRepositorio.buscarPorIdUsuario(usuarioToken.usuario_id);

    if (!usuario) {
      throw new AppError('Usuário não existe!');
    }

    const tokenCriadoEm = usuarioToken.data_criacao;

    if (differenceInHours(Date.now(), tokenCriadoEm) > 2) {
      throw new AppError('Token expirado!');
    }

    usuario.senha = await this.hashProvider.generateHash(senha);

    await this.usuarioRepositorio.salvar(usuario);
  }
}

export default RedifinirSenhaUsuarioService;
