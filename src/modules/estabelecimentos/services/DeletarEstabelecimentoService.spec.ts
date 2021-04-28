import FakeEstabelecimentoRepositorio from '../repositories/fakes/FakeEstabelecimentoRepositorio';
import DeletarEstabelecimentoService from './DeletarEstabelecimentoService';

let fakeEstabelecimentoRepositorio: FakeEstabelecimentoRepositorio;
let deletarEstabelecimento: DeletarEstabelecimentoService;

describe('DeletarEstabelecimentoService', () => {
  beforeEach(() => {
    fakeEstabelecimentoRepositorio = new FakeEstabelecimentoRepositorio();
    deletarEstabelecimento = new DeletarEstabelecimentoService(fakeEstabelecimentoRepositorio);
  });

  it('tem que deletar o registro de acordo com o id', async () => {
    const estabelecimento = await fakeEstabelecimentoRepositorio.criar({
      descricao: 'Estabelecimento 1',
      inativo: false,
      ordem: 1,
    });

    const deltarEstabelecimento = jest.spyOn(fakeEstabelecimentoRepositorio, 'deletar');

    await deletarEstabelecimento.execute(Number(estabelecimento.id));

    expect(deltarEstabelecimento).toHaveBeenCalled();
  });
});
