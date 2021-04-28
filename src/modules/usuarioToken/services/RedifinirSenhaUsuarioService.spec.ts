import AppError from '@shared/errors/AppError';

import FakeHashProvider from '@shared/container/providers/HashProvider/fakes/FakeHashProvider';
import FakeUsuarioTokenRepositorio from '../repositories/fakes/FakeUsuarioTokenRepositorio';
import FakeUsuarioRepositorio from '@modules/usuarios/repositories/fakes/FakeUsuarioRepositorio';
import RedifinirSenhaUsuarioService from './RedifinirSenhaUsuarioService';

let fakeHashProvider: FakeHashProvider;
let fakeUsuarioTokenRepositorio: FakeUsuarioTokenRepositorio;
let fakeUsuarioRepositorio: FakeUsuarioRepositorio;
let redifinirSenhaUsuario: RedifinirSenhaUsuarioService;

describe('RedifinirSenhaUsuarioService', () => {
  beforeEach(() => {
    fakeUsuarioTokenRepositorio = new FakeUsuarioTokenRepositorio();
    fakeUsuarioRepositorio = new FakeUsuarioRepositorio();
    fakeHashProvider = new FakeHashProvider();

    redifinirSenhaUsuario = new RedifinirSenhaUsuarioService(
      fakeUsuarioTokenRepositorio,
      fakeUsuarioRepositorio,
      fakeHashProvider,
    );
  });

  it('devo poder redefinir a senha', async () => {
    const usuario = await fakeUsuarioRepositorio.criar({
      cpf_cnpj: "12369865965",
      nome_razao_social: 'Jonh Doe',
      email: 'jonhdoe@gmail.com',
      senha: '123456',
      codigo_integracao: '36s9dw456'
    });

    const { token } = await fakeUsuarioTokenRepositorio.gerarToken(usuario.id);

    const generateHash = jest.spyOn(fakeHashProvider, 'generateHash');

    await redifinirSenhaUsuario.execute({
      senha: '123123',
      token,
    });

    const usuarioSenhaAlterada = await fakeUsuarioRepositorio.buscarPorIdUsuario(usuario.id);

    expect(generateHash).toHaveBeenCalledWith('123123');
    expect(usuarioSenhaAlterada?.senha).toBe('123123');
  });

  it('não deve ser capaz de redifinir a senha token inexistente', async () => {
    await expect(
      redifinirSenhaUsuario.execute({
        token: 'non-existing-token',
        senha: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('não deve poder redefinir a senha com a usuario inexistente', async () => {
    const { token } = await fakeUsuarioTokenRepositorio.gerarToken(1);

    await expect(
      redifinirSenhaUsuario.execute({
        token,
        senha: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('não poderá redefinir a senha se tiver passado mais de 2 horas', async () => {
    const usuario = await fakeUsuarioRepositorio.criar({
      cpf_cnpj: "12369865965",
      nome_razao_social: 'Jonh Doe',
      email: 'jonhdoe@gmail.com',
      senha: '123456',
      codigo_integracao: '36s9dw456'
    });

    const { token } = await fakeUsuarioTokenRepositorio.gerarToken(usuario.id);

    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      const dataCustomizada = new Date();

      return dataCustomizada.setHours(dataCustomizada.getHours() + 3);
    });

    await expect(
      redifinirSenhaUsuario.execute({
        senha: '123123',
        token,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
