import { injectable, inject } from 'tsyringe';

import IEstadoRepositorio from '../repositories/IEstadoRepositorio';

import Estado from '../infra/typeorm/entities/Estado';

@injectable()
class ListarEstadosService {
  constructor(
    @inject('EstadoRepositorio')
    private estadoRepositorio: IEstadoRepositorio,
  ) { }

  public async execute(): Promise<Estado[]> {
    const estados = await this.estadoRepositorio.listarEstados();

    return estados;
  }
}

export default ListarEstadosService;
