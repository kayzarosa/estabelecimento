import { injectable, inject } from 'tsyringe';

import ICidadeRepositorio from '../repositories/ICidadeRepositorio';

import Cidade from '../infra/typeorm/entities/Cidade';

@injectable()
class ListarCidadeService {
  constructor(
    @inject('CidadeRepositorio')
    private cidadeRepositorio: ICidadeRepositorio,
  ) { }

  public async execute(estado_id: number): Promise<Cidade[]> {
    const cidades = await this.cidadeRepositorio.buscarCidadesPorEstado(estado_id);

    return cidades;
  }
}

export default ListarCidadeService;
