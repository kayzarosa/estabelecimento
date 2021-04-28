import { injectable, inject } from 'tsyringe';

import IEstabelecimentoRepositorio from '../repositories/IEstabelecimentoRepositorio';

@injectable()
class DeletarEstabelecimentoService {
  constructor(
    @inject('EstabelecimentoRepositorio')
    private estabelecimentoRepositorio: IEstabelecimentoRepositorio,
  ) { }

  public async execute(idEstabelecimento: number): Promise<void> {
    await this.estabelecimentoRepositorio.deletar(idEstabelecimento);
  }
}

export default DeletarEstabelecimentoService;
