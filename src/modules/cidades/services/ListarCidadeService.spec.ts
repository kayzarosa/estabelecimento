import FakeCidadeRepositorio from '../repositories/fakes/FakeCidadeRepositorio';
import ListarCidadeService from './ListarCidadeService';

let fakeCidadeRepositorio: FakeCidadeRepositorio;
let listarCidade: ListarCidadeService;

describe('ListarCidadeService', () => {
  beforeEach(() => {
    fakeCidadeRepositorio = new FakeCidadeRepositorio();
    listarCidade = new ListarCidadeService(fakeCidadeRepositorio);
  });

  it('tem que listar todos as cidades de acordo com o estado informado', async () => {
    await fakeCidadeRepositorio.criar({
      nome: 'Uberlandia',
      estado_id: 1
    });

    const cidades = await listarCidade.execute(1);

    expect(cidades[0].nome).toBe('Uberlandia');
    expect(cidades[0].estado_id).toBe(1);
  });

  it('não deve traz nenhuma cidade', async () => {
    const cidade = await listarCidade.execute(1);

    expect(cidade).toStrictEqual([]);
  });
});
