import { injectable, inject } from 'tsyringe';
import path from 'path';

import IUsuarioTokenRepositorio from '../repositories/IUsuarioTokenRepositorio';
import IUsuarioRepositorio from '@modules/usuarios/repositories/IUsuarioRepositorio';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import AppError from '@shared/errors/AppError';

interface IRequest {
  cpf_cnpj: string;
  email: string;
}

@injectable()
class RecuperacaoSenhaUsuarioService { 
  constructor(
    @inject('UsuarioTokenRepositorio')
    private usuarioTokenRepositorio: IUsuarioTokenRepositorio,

    @inject('UsuarioRepositorio')
    private usuarioRepositorio: IUsuarioRepositorio,

    @inject('MailProvider')
    private mailProvider: IMailProvider,
  ) {}

  public async execute({ email }: IRequest): Promise<void> {
    const usuario = await this.usuarioRepositorio.buscarEmailUsuario(email);

    if (!usuario) {
      throw new AppError('Usuário não encontrada!');
    }

    const { token } = await this.usuarioTokenRepositorio.gerarToken(usuario.id);

    const recuperacaoSenhaTemplate = path.resolve(
      __dirname,
      '..',
      'views',
      'recuperar_senha.hbs',
    );

    await this.mailProvider.sendMail({
      to: {
        name: usuario.nome_razao_social,
        email: email,
      },
      subject: '[Estabelecimento] Recuperação de senha!',
      templateData: {
        file: recuperacaoSenhaTemplate,
        variables: {
          name: usuario.nome_razao_social,
          link: `${process.env.APP_WEB_URL}/resetar-senha?token=${token}`,
        },
      },
    });
  }
}

export default RecuperacaoSenhaUsuarioService;
