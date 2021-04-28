import AppError from '@shared/errors/AppError';

import FakeEstabelecimentoRepositorio from '../repositories/fakes/FakeEstabelecimentoRepositorio';
import CriarEstabelecimentoService from './CriarEstabelecimentoService';

let fakeEstabelecimentoRepositorio: FakeEstabelecimentoRepositorio;
let criarEstabelecimento: CriarEstabelecimentoService;

describe('CriarEstabelecimentoService', () => {
  beforeEach(() => {
    fakeEstabelecimentoRepositorio = new FakeEstabelecimentoRepositorio();
    criarEstabelecimento = new CriarEstabelecimentoService(fakeEstabelecimentoRepositorio);
  });

  it('tem que criar um nome estabelecimento', async () => {
    const estabelecimento = await criarEstabelecimento.execute({
      descricao: 'Estabelecimento 1',
      inativo: false,
      ordem: 1,
    });

    expect(estabelecimento.id).toBe(1);
    expect(estabelecimento.descricao).toBe('Estabelecimento 1');
    expect(estabelecimento.inativo).toBe(false);
  });

  it('não deve permitir cadastrar um estabelecimento com o mesmo nome',
    async () => {
      await criarEstabelecimento.execute({
        descricao: 'Estabelecimento 1',
        inativo: false,
        ordem: 1
      });

      await expect(
        criarEstabelecimento.execute({
          descricao: 'Estabelecimento 1',
          inativo: false,
          ordem: 1
        }),
      ).rejects.toBeInstanceOf(AppError);
    });
});
