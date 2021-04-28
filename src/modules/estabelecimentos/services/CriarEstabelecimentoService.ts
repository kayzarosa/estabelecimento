import { injectable, inject } from 'tsyringe';

import IEstabelecimentoRepositorio from '../repositories/IEstabelecimentoRepositorio';
import Estabelecimento from '../infra/typeorm/entities/Estabelecimento';
import AppError from '@shared/errors/AppError';

interface IRequest {
  descricao: string;
  inativo: boolean;
  ordem: number;
  codigo_externo?: string;
}

@injectable()
class CriarEstabelecimentoService {
  constructor(
    @inject('EstabelecimentoRepositorio')
    private estabelecimentoRepositorio: IEstabelecimentoRepositorio,
  ) { }

  public async execute({
    descricao,
    inativo,
    ordem,
    codigo_externo
  }: IRequest): Promise<Estabelecimento> {
    const estabelecimentoExiste = await
      this.estabelecimentoRepositorio.buscarEstabelecimentoPorDescricao(descricao);

    if (estabelecimentoExiste) {
      throw new AppError('Estabelecimento já cadastrado!');
    }

    const estabelecimentoData = {
      descricao,
      inativo,
      ordem,
      codigo_externo,
    };

    const estabelecimento = await this.estabelecimentoRepositorio.criar(estabelecimentoData);

    return estabelecimento;
  }
}

export default CriarEstabelecimentoService;
