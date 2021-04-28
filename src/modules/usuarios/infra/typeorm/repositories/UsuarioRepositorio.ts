import { Repository, getRepository } from "typeorm";
import IUsuarioRepositorio from "@modules/usuarios/repositories/IUsuarioRepositorio";
import ICriarUsuarioDTO from "@modules/usuarios/dtos/ICriarUsuarioDTO";
import Usuario from "../entities/Usuario";

class UsuarioRepositorio implements IUsuarioRepositorio {
  private ormRepository: Repository<Usuario>;

  constructor() {
    this.ormRepository = getRepository(Usuario);
  }

  public async buscarPorIdUsuario(idUsuario: number): Promise<Usuario | undefined> {
    const dadosUsuario = await this.ormRepository.findOne(
      {
        where: {
          id: idUsuario,
        }
      });

    return dadosUsuario;
  }

  public async buscarUsuarioCodigoIntegracao(codigo_integracao: string, email: string): Promise<Usuario | undefined> {
    const usuarioUsuario = await this.ormRepository.findOne(
      {
        where: {
          codigo_integracao,
          email,
        }
      });

    return usuarioUsuario;
  }

  public async buscarEmailUsuario(email: string):
    Promise<Usuario | undefined> {
    const usuarioUsuario = await this.ormRepository.findOne(
      {
        where: {
          email,
        }
      });

    return usuarioUsuario;
  }

  public async buscarCpfCnpjUsuario(cpf_cnpj: string): Promise<Usuario | undefined> {
    const usuarioUsuario = await this.ormRepository.findOne(
      {
        where: {
          cpf_cnpj
        }
      });

    return usuarioUsuario;
  }

  public async criar(usuarioUsuario: ICriarUsuarioDTO):
    Promise<Usuario> {
    const UsuarioUsuario = this.ormRepository.create(usuarioUsuario);

    await this.ormRepository.save(UsuarioUsuario);

    return UsuarioUsuario;
  }

  public async salvar(Usuario: Usuario): Promise<Usuario> {
    return await this.ormRepository.save(Usuario);
  }
}

export default UsuarioRepositorio;
