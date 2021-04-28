import FakeEstadoRepositorio from '../repositories/fakes/FakeEstadoRepositorio';
import ListarEstadosService from './ListarEstadosService';

let fakeEstadoRepositorio: FakeEstadoRepositorio;
let listarEstados: ListarEstadosService;

describe('ListarEstadosService', () => {
  beforeEach(() => {
    fakeEstadoRepositorio = new FakeEstadoRepositorio();
    listarEstados = new ListarEstadosService(fakeEstadoRepositorio);
  });

  it('tem que listar todos os estados cadastrados', async () => {
    await fakeEstadoRepositorio.criar({
      nome: 'Minas Gerais',
      sigla: 'MG',
    });

    const estados = await listarEstados.execute();

    expect(estados[0].nome).toBe('Minas Gerais');
    expect(estados[0].sigla).toBe('MG');
  });

  it('não deve traz nenhum estado', async () => {
    const estato = await listarEstados.execute();

    expect(estato).toStrictEqual([]);
  });
});
