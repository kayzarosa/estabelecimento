import Cidade from '../infra/typeorm/entities/Cidade';

export default interface ICidadeRepositorio {
  buscarCidadesPorEstado(estado_id: number): Promise<Cidade[] | []>;
  buscarCidadesPorNome(nomeCidade: string): Promise<Cidade[] | []>;
  buscarCidadesPeloCodigoIbge(codigoIbge: string): Promise<Cidade | undefined>;
  buscarCidadesPorId(cidadeId: number): Promise<Cidade | undefined>;
}
