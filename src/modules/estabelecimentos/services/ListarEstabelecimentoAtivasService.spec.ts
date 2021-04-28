import FakeEstabelecimentoRepositorio from '../repositories/fakes/FakeEstabelecimentoRepositorio';
import ListarEstabelecimentoAtivasService from './ListarEstabelecimentoAtivasService';

let fakeEstabelecimentoRepositorio: FakeEstabelecimentoRepositorio;
let listarEstabelecimentoAtivas: ListarEstabelecimentoAtivasService;

describe('ListarEstabelecimentoAtivasService', () => {
  beforeEach(() => {
    fakeEstabelecimentoRepositorio = new FakeEstabelecimentoRepositorio();
    listarEstabelecimentoAtivas = new ListarEstabelecimentoAtivasService(fakeEstabelecimentoRepositorio);
  });

  it('tem que listar os estabelecimentos cadastrados', async () => {
    await fakeEstabelecimentoRepositorio.criar({
      descricao: 'Estabelecimento 1',
      inativo: false,
      ordem: 1
    });

    const categorias = await listarEstabelecimentoAtivas.execute();

    expect(categorias[0].id).toBe(1);
  });

  it('não deve traz nenhum estabelecimento vinculado', async () => {
   const categoria = await listarEstabelecimentoAtivas.execute();

    expect(categoria).toStrictEqual([]);
  });
});
