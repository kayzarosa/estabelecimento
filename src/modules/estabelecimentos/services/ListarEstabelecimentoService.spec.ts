import FakeEstabelecimentoRepositorio from '../repositories/fakes/FakeEstabelecimentoRepositorio';
import ListarEstabelecimentoService from './ListarEstabelecimentoService';

let fakeEstabelecimentoRepositorio: FakeEstabelecimentoRepositorio;
let listarEstabelecimento: ListarEstabelecimentoService;

describe('ListarEstabelecimentoService', () => {
  beforeEach(() => {
    fakeEstabelecimentoRepositorio = new FakeEstabelecimentoRepositorio();
    listarEstabelecimento = new ListarEstabelecimentoService(fakeEstabelecimentoRepositorio);
  });

  it('tem que listar os estabelecimentos cadastrados', async () => {
    await fakeEstabelecimentoRepositorio.criar({
      descricao: 'Estabelecimento 1',
      inativo: false,
      ordem: 1
    });

    const categorias = await listarEstabelecimento.execute();

    expect(categorias[0].id).toBe(1);
  });

  it('não deve traz nenhuma esttabelecimento', async () => {
   const categoria = await listarEstabelecimento.execute();

   expect(categoria).toStrictEqual([]);
  });
});
