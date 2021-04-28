import { injectable, inject } from 'tsyringe';

import IEstabelecimentoRepositorio from '../repositories/IEstabelecimentoRepositorio';

import Estabelecimento from '../infra/typeorm/entities/Estabelecimento';

@injectable()
class ListarEstabelecimentoAtivasService {
  constructor(
    @inject('EstabelecimentoRepositorio')
    private estabelecimentoRepositorio: IEstabelecimentoRepositorio,
  ) { }

  public async execute(): Promise<Estabelecimento[]> {
    const estabelecimento = await this.estabelecimentoRepositorio.listarEstabelecimentoAtivos();

    return estabelecimento;
  }
}

export default ListarEstabelecimentoAtivasService;
