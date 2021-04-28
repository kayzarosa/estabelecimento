import ICriarEstabelecimentoDTO from '../dtos/ICriarEstabelecimentoDTO';
import Estabelecimento from '../infra/typeorm/entities/Estabelecimento';

export default interface IEstabelecimentoRepositorio {
  buscarEstabelecimentoPorId(estabelecimentoId: number): Promise<Estabelecimento | undefined>;
  buscarEstabelecimentoPorDescricaoLike(descricaoEstabelecimento: string): Promise<Estabelecimento[] | undefined>;
  buscarEstabelecimentoPorDescricao(descricaoEstabelecimento: string): Promise<Estabelecimento | undefined>;
  buscarEstabelecimentoPorIdExterno(idExterno: string): Promise<Estabelecimento | undefined>;
  listarEstabelecimento(): Promise<Estabelecimento[] | []>;
  listarEstabelecimentoAtivos(): Promise<Estabelecimento[] | []>;
  criar(estabelecimento: ICriarEstabelecimentoDTO): Promise<Estabelecimento>;
  salvar(estabelecimento: Estabelecimento): Promise<Estabelecimento>;
  deletar(idEstabelecimento: number): Promise<void>;
}
