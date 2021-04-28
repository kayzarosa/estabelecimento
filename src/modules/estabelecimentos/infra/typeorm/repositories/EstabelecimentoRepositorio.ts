import { Repository, getRepository, Like } from "typeorm";
import IEstabelecimentoRepositorio from '../../../repositories/IEstabelecimentoRepositorio';
import Estabelecimento from '@modules/estabelecimentos/infra/typeorm/entities/Estabelecimento';
import ICriarEstabelecimentoDTO from "@modules/estabelecimentos/dtos/ICriarEstabelecimentoDTO";

class EstabelecimentoRepositorio implements IEstabelecimentoRepositorio {
  private ormRepository: Repository<Estabelecimento>;

  constructor() {
    this.ormRepository = getRepository(Estabelecimento);
  }

  public async buscarEstabelecimentoPorId(estabelecimentoId: number): Promise<Estabelecimento | undefined> {
    const resultadoCategoria = await this.ormRepository.findOne({
      where: {
        id: estabelecimentoId,
      },
    });

    return resultadoCategoria || undefined;
  }

  public async buscarEstabelecimentoPorDescricaoLike(descricaoEstabelecimento: string): Promise<Estabelecimento[] | undefined> {
    const resultadoCategoria = await this.ormRepository.find({
      where: {
        descricao: Like('%' + descricaoEstabelecimento + '%'),
      },
      order: {
        descricao: "ASC",
      },
    });

    return resultadoCategoria || undefined;
  }

  public async buscarEstabelecimentoPorDescricao(descricaoEstabelecimento: string): Promise<Estabelecimento | undefined> {
    const resultadoCategoria = await this.ormRepository.findOne({
      where: {
        descricao: descricaoEstabelecimento,
      },
    });

    return resultadoCategoria || undefined;
  }

  public async buscarEstabelecimentoPorIdExterno(idExterno: string): Promise<Estabelecimento | undefined> {
    const resultadoCategoria = await this.ormRepository.findOne({
      where: {
        codigo_externo: idExterno,
      },
    });

    return resultadoCategoria || undefined;
  }

  public async listarEstabelecimento(): Promise<Estabelecimento[] | []> {
    const resultadoCategoria = await this.ormRepository.find({
      order: {
        ordem: "ASC",
        descricao: "ASC",
      },
    });

    return resultadoCategoria || [];
  }

  public async listarEstabelecimentoAtivos(): Promise<Estabelecimento[] | []> {
    const resultadoCategoria = await this.ormRepository.find({
      where: {
        inativo: false,
      },
      order: {
        ordem: "ASC",
        descricao: "ASC",
      },
    });

    return resultadoCategoria || [];
  }

  public async criar(estabelecimento: ICriarEstabelecimentoDTO): Promise<Estabelecimento> {
    const novoEstabelecimento = this.ormRepository.create(estabelecimento);

    await this.ormRepository.save(novoEstabelecimento);

    return novoEstabelecimento;
  }

  public async salvar(estabelecimento: Estabelecimento): Promise<Estabelecimento> {
    return await this.ormRepository.save(estabelecimento);
  }

  public async deletar(idEstabelecimento: number): Promise<void> {
    await this.ormRepository.delete(idEstabelecimento);
  }
}

export default EstabelecimentoRepositorio;
