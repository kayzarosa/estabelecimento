import ICriarEstabelecimentoDTO from '@modules/estabelecimentos/dtos/ICriarEstabelecimentoDTO';
import IEstabelecimentoRepositorio from '../IEstabelecimentoRepositorio';
import Estabelecimento from '@modules/estabelecimentos/infra/typeorm/entities/Estabelecimento';

class FakeEstabelecimentoRepositorio implements IEstabelecimentoRepositorio {
  private estabelecimentos: Estabelecimento[] = [];

  public async buscarEstabelecimentoPorId(estabelecimentoId: number): Promise<Estabelecimento | undefined> {
    const resultadoEstabelecimento = this.estabelecimentos.find(
      estabelecimentoFind => estabelecimentoFind.id === estabelecimentoId
    );

    return resultadoEstabelecimento || undefined;
  }

  public async buscarEstabelecimentoPorDescricaoLike(descricaoEstabelecimento: string): Promise<Estabelecimento[] | undefined> {
    const resultadoEstabelecimento = this.estabelecimentos.filter(
      estabelecimentoFind =>  estabelecimentoFind.descricao.indexOf(descricaoEstabelecimento) >= 0);

    return resultadoEstabelecimento || undefined;
  }

  public async buscarEstabelecimentoPorDescricao(descricaoEstabelecimento: string): Promise<Estabelecimento | undefined> {
    const resultadoEstabelecimento = this.estabelecimentos.find(
      estabelecimentoFind => estabelecimentoFind.descricao === descricaoEstabelecimento);

    return resultadoEstabelecimento || undefined;
  }

  public async buscarEstabelecimentoPorIdExterno(idExterno: string): Promise<Estabelecimento | undefined> {
    const resultadoEstabelecimento = this.estabelecimentos.find(
      estabelecimentoFind => estabelecimentoFind.codigo_externo === idExterno);

    return resultadoEstabelecimento || undefined;
  }

  public async listarEstabelecimento(): Promise<Estabelecimento[] | []> {
    return this.estabelecimentos || [];
  }

  public async listarEstabelecimentoAtivos(): Promise<Estabelecimento[] | []> {
    const resultadoEstabelecimento = this.estabelecimentos.filter(
      estabelecimentoFind => estabelecimentoFind.inativo === false);

    return resultadoEstabelecimento || [];
  }

  public async criar(estabelecimento: ICriarEstabelecimentoDTO): Promise<Estabelecimento> {
    const novoEstabelecimento = new Estabelecimento();

    Object.assign(novoEstabelecimento,
      { id: Number(this.estabelecimentos.length + 1) }, estabelecimento);

    this.estabelecimentos.push(novoEstabelecimento);

    return novoEstabelecimento;
  }

  public async salvar(estabelecimento: Estabelecimento): Promise<Estabelecimento> {
    const findIndex = this.estabelecimentos.findIndex(estabelecimentoFind => estabelecimentoFind.id === estabelecimento.id);

    this.estabelecimentos[findIndex] = estabelecimento;

    return estabelecimento;
  }

  public async deletar(idEstabelecimento: number): Promise<void> {
    const resultadoEstabelecimentos = this.estabelecimentos.filter(
      estabelecimentoFind => estabelecimentoFind.id === idEstabelecimento
    );

    this.estabelecimentos = resultadoEstabelecimentos;
  }
}

export default FakeEstabelecimentoRepositorio;
