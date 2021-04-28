import AppError from '@shared/errors/AppError';

import FakeUsuarioRepositorio from '../repositories/fakes/FakeUsuarioRepositorio';
import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import UpdateFotoServise from './UpdateFotoServise';

let fakeUsuarioRepositorio: FakeUsuarioRepositorio;
let fakeStorageProvider: FakeStorageProvider;
let updateFoto: UpdateFotoServise;

describe('UpdateFotoServise', () => {
  beforeEach(() => {
    fakeUsuarioRepositorio = new FakeUsuarioRepositorio();
    fakeStorageProvider = new FakeStorageProvider();

    updateFoto = new UpdateFotoServise(
      fakeUsuarioRepositorio,
      fakeStorageProvider,
    );
  });

  it('deve ser capaz de salva o foto', async () => {
    const usuario = await fakeUsuarioRepositorio.criar({
      cpf_cnpj: "12369865965",
      nome_razao_social: 'Jonh Doe',
      email: 'jonhdoe@gmail.com',
      senha: '123456',
      codigo_integracao: '36s9dw456'
    });

    await updateFoto.execute({
      usuarioId: usuario.id,
      foto: 'logo.jpg',
    });

    expect(usuario.foto).toBe('logo.jpg');
  });

  it('não deve ser para atualizar o foto do usuário', async () => {
    await expect(
      updateFoto.execute({
        usuarioId: 1,
        foto: 'logo.jpg',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('deve deletar a foto antigo ao atualizar o novo', async () => {
    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

    const usuario = await fakeUsuarioRepositorio.criar({
      cpf_cnpj: "12369865965",
      nome_razao_social: 'Jonh Doe',
      email: 'jonhdoe@gmail.com',
      senha: '123456',
      codigo_integracao: '36s9dw456'
    });

    await updateFoto.execute({
      usuarioId: usuario.id,
      foto: 'logo.jpg',
    });

    await updateFoto.execute({
      usuarioId: usuario.id,
      foto: 'logo2.jpg',
    });

    expect(deleteFile).toHaveBeenCalledWith('logo.jpg');

    expect(usuario.foto).toBe('logo2.jpg');
  });
});
