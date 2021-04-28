import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IHashProvider from '@shared/container/providers/HashProvider/models/IHashProvider';
import IUsuarioRepositorio from '../repositories/IUsuarioRepositorio';
import Usuario from '../infra/typeorm/entities/Usuario';

interface IRequest {
  usuarioId: number;
  senha: string;
}

@injectable()
class AlterarSenhaUsuarioService {
  constructor(
    @inject('UsuarioRepositorio')
    private usuarioRepositorio: IUsuarioRepositorio,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ usuarioId, senha }: IRequest): Promise<void> {
    const usuario = await this.usuarioRepositorio.buscarPorIdUsuario(usuarioId);

    if (!usuario) {
      throw new AppError('Usuário não encontrado!');
    }

    const senhaData = {
      id: usuario.id,
      senha: await this.hashProvider.generateHash(senha),
    } as Usuario;

    await this.usuarioRepositorio.salvar(senhaData);
  }
}

export default AlterarSenhaUsuarioService;
