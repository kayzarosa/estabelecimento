import { injectable, inject } from 'tsyringe';
import { v4 as uuidV4 } from 'uuid';
import path from 'path';

import IUsuarioRepositorio from '../repositories/IUsuarioRepositorio';
import IHashProvider from '@shared/container/providers/HashProvider/models/IHashProvider';
import Usuario from '../infra/typeorm/entities/Usuario';
import AppError from '@shared/errors/AppError';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';

interface IRequest {
  cpf_cnpj: string;
  nome_razao_social: string;
  email: string;
  senha: string;
}

@injectable()
class CriarUsuarioService {
  constructor(
    @inject('UsuarioRepositorio')
    private usuarioRepositorio: IUsuarioRepositorio,

    @inject('HashProvider')
    private hashProvider: IHashProvider,

    @inject('MailProvider')
    private mailProvider: IMailProvider,
  ) { }

  public async execute({
    cpf_cnpj,
    nome_razao_social,
    email,
    senha,
  }: IRequest): Promise<Usuario> {
    const usuárioExiste = await
      this.usuarioRepositorio.buscarCpfCnpjUsuario(cpf_cnpj);

    if (usuárioExiste) {
      throw new AppError('Usuário já cadastrado!');
    }

    const hashedPassword = await this.hashProvider.generateHash(senha);

    const usuarioData = {
      cpf_cnpj,
      nome_razao_social,
      email,
      senha: hashedPassword,
      codigo_integracao: uuidV4()
    };

    const empresaUsuario = await this.usuarioRepositorio.criar(usuarioData);

    const usuarioCadastradoTemplate = path.resolve(
      __dirname,
      '..',
      'views',
      'novo_usuario.hbs',
    );

    await this.mailProvider.sendMail({
      to: {
        name: nome_razao_social,
        email: email,
      },
      subject: '[Estabelecimento] Bem vido(a)!',
      templateData: {
        file: usuarioCadastradoTemplate,
        variables: {
          name: nome_razao_social,
        },
      },
    });

    return empresaUsuario;
  }
}

export default CriarUsuarioService;
