import AppError from '@shared/errors/AppError';

import FakeEstabelecimentoRepositorio from '../repositories/fakes/FakeEstabelecimentoRepositorio';
import AlterarEstabelecimentoService from './AlterarEstabelecimentoService';

let fakeEstabelecimentoRepositorio: FakeEstabelecimentoRepositorio;
let alterarEstabelecimento: AlterarEstabelecimentoService;

describe('AlterarEstabelecimentoService', () => {
  beforeEach(() => {
    fakeEstabelecimentoRepositorio = new FakeEstabelecimentoRepositorio();

    alterarEstabelecimento = new AlterarEstabelecimentoService(
      fakeEstabelecimentoRepositorio,
    );
  });

  it('deve salvar as alterações no cadastro do estabelecimento', async () => {
    const estabelecimento = await fakeEstabelecimentoRepositorio.criar({
      descricao: 'Estabelecimento 1',
      inativo: false,
      ordem: 1
    });

    expect(estabelecimento).toHaveProperty('id');

    const dadosEstabelecimento = {
      id: estabelecimento.id,
      descricao: 'Estabelecimento 1',
      inativo: false,
      ordem: 1
    };

    const estabelecimentoAlterado = await alterarEstabelecimento.execute(dadosEstabelecimento);

    expect(estabelecimentoAlterado).toEqual(
      expect.objectContaining(
        {
          id: estabelecimento.id,
          descricao: 'Estabelecimento 1',
          inativo: false,
          ordem: 1
        }
      ),
    );
  });

  it('deve salvar as alterações no cadastro de estabelecimento com os campos não obrigatório',
    async () => {
      const estabelecimento = await fakeEstabelecimentoRepositorio.criar({
        descricao: 'estabelecimento 1',
        inativo: false,
        ordem: 1
      });

      expect(estabelecimento).toHaveProperty('id');

      const dadosEstabelecimento = {
        id: estabelecimento.id,
        descricao: 'Estabelecimento 1',
        inativo: false,
        ordem: 1,
        codigo_externo: '123456'
      };

      const estabelecimentoAlterado = await alterarEstabelecimento.execute(dadosEstabelecimento);

      expect(estabelecimentoAlterado).toEqual(
        expect.objectContaining(
          {
            id: estabelecimento.id,
            descricao: 'Estabelecimento 1',
            inativo: false,
            ordem: 1,
            codigo_externo: '123456'
          }
        ),
      );
    });

  it('não deve deixar alterar uma estabelecimento não cadastrada', async () => {
    const dadosEstabelecimento = {
      id: 1,
      descricao: 'Estabelecimento 1',
      inativo: false,
      ordem: 1
    };

    await expect(
      alterarEstabelecimento.execute(dadosEstabelecimento)
    ).rejects.toBeInstanceOf(AppError);
  });

  it('deve não permitir alterar a estabelecimentoa para uma que ja está cadastrada',
    async () => {
      const estabelecimento = await fakeEstabelecimentoRepositorio.criar({
        descricao: 'Estabelecimento 1',
        inativo: false,
        ordem: 1
      });

      await fakeEstabelecimentoRepositorio.criar({
        descricao: 'Estabelecimento 2',
        inativo: false,
        ordem: 1
      });

      expect(estabelecimento).toHaveProperty('id');

      const dadosEstabelecimento = {
        id: estabelecimento.id,
        descricao: 'Estabelecimento 2',
        inativo: false,
        ordem: 1
      };

      await expect(
        alterarEstabelecimento.execute(dadosEstabelecimento)
      ).rejects.toBeInstanceOf(AppError);
    });
});
