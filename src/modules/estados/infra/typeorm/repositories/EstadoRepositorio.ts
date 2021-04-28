import { Repository, getRepository } from "typeorm";
import IEstadoRepositorio from '../../../repositories/IEstadoRepositorio';
import Estado from '@modules/estados/infra/typeorm/entities/Estado';

class EstadoRepositorio implements IEstadoRepositorio {
  private ormRepository: Repository<Estado>;

  constructor() {
    this.ormRepository = getRepository(Estado);
  }

  public async listarEstados(): Promise<Estado[] | []> {
    const estados = await this.ormRepository.find({
      order: {
        nome: "ASC",
      }
    });

    return estados || [];
  }

  public async buscarEstadoSigla(sigla: string): Promise<Estado | undefined> {
    const estado = await this.ormRepository.findOne({
      where: {
        sigla
      },
      order: {
        nome: "ASC",
      }
    });

    return estado;
  }

  public async buscarEstadoPorId(estadoId: number): Promise<Estado | undefined> {
    const estado = await this.ormRepository.findOne({
      where: {
        id: estadoId
      },
      order: {
        nome: "ASC",
      }
    });

    return estado;
  }

}

export default EstadoRepositorio;
