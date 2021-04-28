import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import ISotorageProvider from '@shared/container/providers/StorageProvider/models/ISotorageProvider';
import IUsuarioRepositorio from '../repositories/IUsuarioRepositorio';

import Usuario from '../infra/typeorm/entities/Usuario';

interface IRequest {
  usuarioId: number;
  foto: string;
}

@injectable()
class UpdateFotoServise {
  constructor(
    @inject('UsuarioRepositorio')
    private usuarioRepositorio: IUsuarioRepositorio,

    @inject('StorageProvider')
    private storageProvider: ISotorageProvider,
  ) { }

  public async execute({ usuarioId, foto }: IRequest): Promise<Usuario> {
    const usuario = await this.usuarioRepositorio.buscarPorIdUsuario(usuarioId);

    if (!usuario) {
      throw new AppError('Apenas usuários autenticados podem alterar o foto', 401);
    }

    if (usuario.foto) {
      await this.storageProvider.deleteFile(usuario.foto);
    }

    const nomeArquivo = await this.storageProvider.saveFile(foto);

    usuario.foto = nomeArquivo;

    await this.usuarioRepositorio.salvar(usuario);

    return usuario;
  }
}

export default UpdateFotoServise;
