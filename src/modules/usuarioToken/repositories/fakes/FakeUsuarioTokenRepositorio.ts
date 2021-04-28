import IUsuarioTokenRepositorio from '@modules/usuarioToken/repositories/IUsuarioTokenRepositorio';

import UsuarioToken from '@modules/usuarioToken/infra/typeorm/entities/UsuarioToken';
import { v4 as uuidv4 } from 'uuid';

class FakeUsuarioTokenRepositorio implements IUsuarioTokenRepositorio {
  private usuariosToken: UsuarioToken[] = [];

  public async gerarToken(usuarioId: number): Promise<UsuarioToken> {
    const usuarioToken = new UsuarioToken();

    Object.assign(usuarioToken, {
      id: Number(this.usuariosToken.length + 1),
      token: uuidv4(),
      usuario_id: usuarioId,
      data_criacao: new Date(),
      data_alteracao: new Date(),
    });

    this.usuariosToken.push(usuarioToken);

    return usuarioToken;
  }

  public async buscarPorToken(token: string): Promise<UsuarioToken | undefined> {
    const usuarioToken = this.usuariosToken.find(
      findToken => findToken.token === token,
    );

    return usuarioToken;
  }
}

export default FakeUsuarioTokenRepositorio;
