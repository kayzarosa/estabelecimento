import Estado from '../infra/typeorm/entities/Estado';

export default interface IEstadoRepositorio {
  listarEstados(): Promise<Estado[] | []>;
  buscarEstadoSigla(sigla: string): Promise<Estado | undefined>;
  buscarEstadoPorId(estadoId: number): Promise<Estado | undefined>;
}
