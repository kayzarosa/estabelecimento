import ICriarUsuarioDTO from "../dtos/ICriarUsuarioDTO";
import Usuario from "../infra/typeorm/entities/Usuario";

export default interface IUsuarioRepositorio {
  buscarPorIdUsuario(idUsuario: number): Promise<Usuario | undefined>;
  buscarEmailUsuario(email: string): Promise<Usuario | undefined>;
  buscarUsuarioCodigoIntegracao(codigo_integracao: string, email: string): Promise<Usuario | undefined>;
  buscarCpfCnpjUsuario(cpf_cnpj: string): Promise<Usuario | undefined>;
  criar(usuarioUsuario: ICriarUsuarioDTO): Promise<Usuario>;
  salvar(usuario: Usuario): Promise<Usuario>;
}
