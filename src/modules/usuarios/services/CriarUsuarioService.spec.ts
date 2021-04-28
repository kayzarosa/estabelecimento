import AppError from '@shared/errors/AppError';

import FakeUsuarioRepositorio from '../repositories/fakes/FakeUsuarioRepositorio';
import FakeHashProvider from '@shared/container/providers/HashProvider/fakes/FakeHashProvider';
import CriarUsuarioService from './CriarUsuarioService';
import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';

let fakeUsuarioRepositorio: FakeUsuarioRepositorio;
let fakeHashProvider: FakeHashProvider;
let fakeMailProvider: FakeMailProvider;
let criarUsuario: CriarUsuarioService;

describe('CriarUsuarioService', () => {
  beforeEach(() => {
    fakeUsuarioRepositorio = new FakeUsuarioRepositorio();
    fakeMailProvider = new FakeMailProvider();
    fakeHashProvider = new FakeHashProvider();

    criarUsuario = new CriarUsuarioService(
      fakeUsuarioRepositorio,
      fakeHashProvider,
      fakeMailProvider,
    );
  });

  it('criar um novo login e os primeiros dados do usuário', async () => {
    const user = await criarUsuario.execute({
      cpf_cnpj: "12369865965",
      nome_razao_social: 'Jonh Doe',
      email: 'jonhdoe@gmail.com',
      senha: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('não criar um novo login para uma usuário já cadastrada', async () => {
    await criarUsuario.execute({
      cpf_cnpj: "12369865965",
      nome_razao_social: 'Jonh Doe',
      email: 'jonhdoe@gmail.com',
      senha: '123456',
    });

    await expect(
      criarUsuario.execute({
        cpf_cnpj: "12369865965",
        nome_razao_social: 'Jonh Doe',
        email: 'jonhdoe@gmail.com',
        senha: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
