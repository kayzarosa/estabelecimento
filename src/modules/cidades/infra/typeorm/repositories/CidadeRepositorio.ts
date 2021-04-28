import { Repository, getRepository, Like } from "typeorm";
import ICidadeRepositorio from "@modules/cidades/repositories/ICidadeRepositorio";

import Cidade from "../entities/Cidade";

class CidadeRepositorio implements ICidadeRepositorio {
  private ormRepository: Repository<Cidade>;

  constructor() {
    this.ormRepository = getRepository(Cidade);
  }

  public async buscarCidadesPorEstado(estado_id: number): Promise<Cidade[] | []> {
    const dadosCidade = await this.ormRepository.find(
      {
        where: {
          estado_id
        },
        order: {
          nome: "ASC",
        },
      });

    return dadosCidade || [];
  }

  public async buscarCidadesPorNome(nomeCidade: string): Promise<Cidade[] | []> {
    const dadosCidade = await this.ormRepository.find(
      {
        where: {
          nome: Like('%' + nomeCidade + '%'),
        },
        order: {
          nome: "ASC",
        },
      });

    return dadosCidade || [];
  }

  public async buscarCidadesPeloCodigoIbge(codigoIbge: string): Promise<Cidade | undefined> {
    const dadosCidade = await this.ormRepository.findOne(
      {
        where: {
          codigo_ibge: codigoIbge
        },
        order: {
          nome: "ASC",
        },
      })

    return dadosCidade;
  }

  public async buscarCidadesPorId(cidadeId: number): Promise<Cidade | undefined> {
    const dadosCidade = await this.ormRepository.findOne(
      {
        where: {
          id: cidadeId
        },
        order: {
          nome: "ASC",
        },
      })

    return dadosCidade;
  }
}

export default CidadeRepositorio;
