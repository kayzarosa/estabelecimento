import AppError from '@shared/errors/AppError';

import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import FakeUsuarioRepositorio from '@modules/usuarios/repositories/fakes/FakeUsuarioRepositorio';
import FakeUsuarioTokenRepositorio from '../repositories/fakes/FakeUsuarioTokenRepositorio';
import RecuperacaoSenhaUsuarioService from './RecuperacaoSenhaUsuarioService';

let fakeUsuarioRepositorio: FakeUsuarioRepositorio;
let fakeUsuarioTokenRepositorio: FakeUsuarioTokenRepositorio;
let fakeMailProvider: FakeMailProvider;
let recuperacaoSenhaUsuario: RecuperacaoSenhaUsuarioService;

describe('RecuperacaoSenhaUsuarioService', () => {
  beforeEach(() => {
    fakeUsuarioRepositorio = new FakeUsuarioRepositorio();
    fakeMailProvider = new FakeMailProvider();
    fakeUsuarioTokenRepositorio = new FakeUsuarioTokenRepositorio();

    recuperacaoSenhaUsuario = new RecuperacaoSenhaUsuarioService(
      fakeUsuarioTokenRepositorio,
      fakeUsuarioRepositorio,
      fakeMailProvider,
    );
  });

  it('deve recuperar a senha usando o cpf / cnpj e o email', async () => {
    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    await fakeUsuarioRepositorio.criar({
      cpf_cnpj: "12369865965",
      nome_razao_social: 'Jonh Doe',
      email: 'jonhdoe@gmail.com',
      senha: '123456',
      codigo_integracao: '36s9dw456'
    });

    await recuperacaoSenhaUsuario.execute({
      cpf_cnpj: "12369865965",
      email: 'jonhdoe@gmail.com',
    });

    expect(sendMail).toHaveBeenCalled();
  });

  it('não deve recuperar a senha usuário não cadastrado', async () => {
    await expect(
      recuperacaoSenhaUsuario.execute({
        cpf_cnpj: "12369865965",
        email: 'jonhdoe@gmail.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should generete a forgot password token', async () => {
    const gerarToken = jest.spyOn(fakeUsuarioTokenRepositorio, 'gerarToken');

    const usuario = await fakeUsuarioRepositorio.criar({
      cpf_cnpj: "12369865965",
      nome_razao_social: 'Jonh Doe',
      email: 'jonhdoe@gmail.com',
      senha: '123456',
      codigo_integracao: '36s9dw456'
    });

    await recuperacaoSenhaUsuario.execute({
      cpf_cnpj: "12369865965",
      email: 'jonhdoe@gmail.com',
    });

    expect(gerarToken).toHaveBeenCalledWith(usuario.id);
  });
});
