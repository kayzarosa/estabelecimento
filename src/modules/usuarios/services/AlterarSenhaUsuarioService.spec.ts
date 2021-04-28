import AppError from '@shared/errors/AppError';

import FakeHashProvider from '@shared/container/providers/HashProvider/fakes/FakeHashProvider';
import FakeUsuarioRepositorio from '@modules/usuarios/repositories/fakes/FakeUsuarioRepositorio';
import AlterarSenhaUsuarioService from './AlterarSenhaUsuarioService';

let fakeHashProvider: FakeHashProvider;
let fakeUsuarioRepositorio: FakeUsuarioRepositorio;
let alterarSenhaUsuario: AlterarSenhaUsuarioService;

describe('alterarSenhaUsuario', () => {
  beforeEach(() => {
    fakeUsuarioRepositorio = new FakeUsuarioRepositorio();
    fakeHashProvider = new FakeHashProvider();

    alterarSenhaUsuario = new AlterarSenhaUsuarioService(
      fakeUsuarioRepositorio,
      fakeHashProvider,
    );
  });

  it('devo poder alterar minha senha', async () => {
    const usuario = await fakeUsuarioRepositorio.criar({
      cpf_cnpj: "12369865965",
      nome_razao_social: 'Jonh Doe',
      email: 'jonhdoe@gmail.com',
      senha: '123456',
      codigo_integracao: '36s9dw456'
    });

    await alterarSenhaUsuario.execute({
      senha: '123123',
      usuarioId: usuario.id,
    });

    const usuarioSenhaAlterada = await fakeUsuarioRepositorio.buscarPorIdUsuario(usuario.id);

    expect(usuarioSenhaAlterada?.senha).toBe('123123');
  });

  it('não deve poder alterar a senha com o usuário inexistente', async () => {
    await expect(
      alterarSenhaUsuario.execute({
        senha: '123123',
        usuarioId: 1,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
