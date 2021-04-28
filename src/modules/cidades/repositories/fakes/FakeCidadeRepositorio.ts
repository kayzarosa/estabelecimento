import IEmpresaRepositorio from '../ICidadeRepositorio';
import Cidade from '@modules/cidades/infra/typeorm/entities/Cidade';
import ICriarCidadeDTO from '@modules/cidades/dtos/ICriarCidadeDTO';

class FakeCiadeRepositorio implements IEmpresaRepositorio {
  private cidades: Cidade[] = [];

  public async buscarCidadesPorEstado(estado_id: number): Promise<Cidade[] | []> {
    const cidadesPorEstado = this.cidades.filter(cidade => cidade.estado_id === estado_id);

    return cidadesPorEstado || [];
  }

  public async buscarCidadesPeloCodigoIbge(codigoIbge: string): Promise<Cidade | undefined> {
    return this.cidades.find(cidadeFind => cidadeFind.codigo_ibge === codigoIbge);
  }

  public async buscarCidadesPorNome(nomeCidade: string): Promise<Cidade[] | []> {
    return this.cidades.filter(cidade => cidade.nome === nomeCidade);
  }

  public async buscarCidadesPorId(cidadeId: number): Promise<Cidade | undefined> {
    return this.cidades.find(cidadeFind => cidadeFind.id === cidadeId);
  }

  public async criar(cadastrarCidade: ICriarCidadeDTO):
    Promise<Cidade> {
    const novaCidade = new Cidade();

    Object.assign(novaCidade, { id: Number(this.cidades.length + 1) }, cadastrarCidade);

    this.cidades.push(novaCidade);

    return novaCidade;
  }
}

export default FakeCiadeRepositorio;
