import { injectable, inject } from 'tsyringe';

import IEstabelecimentoRepositorio from '../repositories/IEstabelecimentoRepositorio';

import Estabelecimento from '../infra/typeorm/entities/Estabelecimento';

@injectable()
class ListarEstabelecimentoService {
  constructor(
    @inject('EstabelecimentoRepositorio')
    private estabelecimentoRepositorio: IEstabelecimentoRepositorio,
  ) { }

  public async execute(): Promise<Estabelecimento[]> {
    const estabelecimento = await this.estabelecimentoRepositorio.listarEstabelecimento();

    return estabelecimento;
  }
}

export default ListarEstabelecimentoService;
