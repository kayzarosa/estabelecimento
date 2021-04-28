import IUsuarioRepositorio from '../IUsuarioRepositorio';
import Usuario from '@modules/usuarios/infra/typeorm/entities/Usuario';
import ICriarUsuarioDTO from '@modules/usuarios/dtos/ICriarUsuarioDTO';

class FakeUsuarioRepositorio implements IUsuarioRepositorio {
  private usuarios: Usuario[] = [];

  public async buscarPorIdUsuario(idUsuario: number): Promise<Usuario | undefined> {
    const dadosUsuario = this.usuarios.find(usuario => usuario.id === idUsuario);

    return dadosUsuario;
  }

  public async buscarUsuarioCodigoIntegracao(codigo_integracao: string, email: string): Promise<Usuario | undefined> {
    const usuario = this.usuarios.find(
      usuarioFind => usuarioFind.codigo_integracao === codigo_integracao
        && usuarioFind.email === email
    );

    return usuario;
  }

  public async buscarEmailUsuario(email: string):
    Promise<Usuario | undefined> {
    const usuario = this.usuarios.find(
      usuarioFind => usuarioFind.email === email
    );

    return usuario;
  }

  public async buscarCpfCnpjUsuario(cpf_cnpj: string): Promise<Usuario | undefined> {
    const usuario = this.usuarios.find(
      usuarioFind => usuarioFind.cpf_cnpj === cpf_cnpj);

    return usuario;
  }

  public async criar(usuario: ICriarUsuarioDTO):
    Promise<Usuario> {
    const usuarioNovo = new Usuario();

    Object.assign(usuarioNovo, { id: Number(this.usuarios.length + 1) }, usuario);

    this.usuarios.push(usuarioNovo);

    return usuarioNovo;
  }

  public async salvar(usuario: Usuario): Promise<Usuario> {
    const findIndex = this.usuarios.findIndex(findUsuario => findUsuario.id === usuario.id);

    this.usuarios[findIndex] = usuario;

    return usuario;
  }

}

export default FakeUsuarioRepositorio;
