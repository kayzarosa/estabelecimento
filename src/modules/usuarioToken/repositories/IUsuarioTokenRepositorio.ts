import UsuarioToken from '../infra/typeorm/entities/UsuarioToken';

export default interface IUsuarioTokenRepositorio {
  gerarToken(usuarioId: number): Promise<UsuarioToken>;
  buscarPorToken(token: string): Promise<UsuarioToken | undefined>;
}
