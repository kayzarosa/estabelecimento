import AppError from '@shared/errors/AppError';

import FakeUsuarioRepositorio from '../repositories/fakes/FakeUsuarioRepositorio';
import FakeHashProvider from '@shared/container/providers/HashProvider/fakes/FakeHashProvider';
import AutenticarUsuarioService from './AutenticarUsuarioService';

let fakeUsuarioRepositorio: FakeUsuarioRepositorio;
let fakeHashProvider: FakeHashProvider;
let autenticarUsuario: AutenticarUsuarioService;


describe('AutenticarUsuarioService', () => {
  beforeEach(() => {
    fakeUsuarioRepositorio = new FakeUsuarioRepositorio();
    fakeHashProvider = new FakeHashProvider();

    autenticarUsuario = new AutenticarUsuarioService(
      fakeUsuarioRepositorio,
      fakeHashProvider,
    );
  });

  it('deve ser capaz de autenticar', async () => {
    let usuario = await fakeUsuarioRepositorio.criar({
      cpf_cnpj: "12369865965",
      nome_razao_social: 'Jonh Doe',
      email: 'jonhdoe@gmail.com',
      senha: '123456',
      codigo_integracao: '36s9dw456',
      usuario_ativo: true
    });

    const response = await autenticarUsuario.execute({
      email: 'jonhdoe@gmail.com',
      senha: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.usuario).toEqual(usuario);
  });

  it('não devo poder se autenticar com usuários inexistentes', async () => {
    await expect(
      autenticarUsuario.execute({
        email: 'jonhdoe@gmail.com',
        senha: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('não deve ser capaz de autenticar com senha incorreta', async () => {
    let usuario = await fakeUsuarioRepositorio.criar({
      cpf_cnpj: "12369865965",
      nome_razao_social: 'Jonh Doe',
      email: 'jonhdoe@gmail.com',
      senha: '123456',
      codigo_integracao: '36s9dw456',
      usuario_ativo: true
    });

    await expect(
      autenticarUsuario.execute({
        email: 'jonhdoe@gmail.com',
        senha: 'wrong-password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('não deve ser capaz de autenticar sem estar ativo', async () => {
    await fakeUsuarioRepositorio.criar({
      cpf_cnpj: "12369865965",
      nome_razao_social: 'Jonh Doe',
      email: 'jonhdoe@gmail.com',
      senha: '123456',
      codigo_integracao: '36s9dw456'
    });

    await expect(
      autenticarUsuario.execute({
        email: 'jonhdoe@gmail.com',
        senha: 'wrong-password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
