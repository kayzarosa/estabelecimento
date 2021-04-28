import { getRepository, Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import IUsuarioTokenRepositorio from '@modules/usuarioToken/repositories/IUsuarioTokenRepositorio';

import UsuarioToken from '../entities/UsuarioToken';

class UsuarioTokenRepositorio implements IUsuarioTokenRepositorio {
  private ormRepository: Repository<UsuarioToken>;
  
  constructor() {
    this.ormRepository = getRepository(UsuarioToken);
  }

  public async buscarPorToken(token: string): Promise<UsuarioToken | undefined> {
    const usuarioToken = await this.ormRepository.findOne({ where: { token } });

    return usuarioToken;
  }

  public async gerarToken(usuarioId: number): Promise<UsuarioToken> {
    const criarUsuarioToken = {
      token: uuidv4(),
      usuario_id: usuarioId,
    };

    const usuarioToken = this.ormRepository.create(criarUsuarioToken);

    await this.ormRepository.save(usuarioToken);

    return usuarioToken;
  }
}

export default UsuarioTokenRepositorio;
