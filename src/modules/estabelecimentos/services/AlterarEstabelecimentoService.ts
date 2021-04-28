import { injectable, inject } from 'tsyringe';

import IEstabelecimentoRepositorio from '../repositories/IEstabelecimentoRepositorio';
import Estabelecimento from '../infra/typeorm/entities/Estabelecimento';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: number;
  descricao: string;
  inativo: boolean;
  ordem: number;
  codigo_externo?: string;
}

@injectable()
class AlterarEstabelecimentoService {
  constructor(
    @inject('EstabelecimentoRepositorio')
    private estabelecimentoRepositorio: IEstabelecimentoRepositorio,
  ) { }

  public async execute({
    id,
    descricao,
    inativo,
    ordem,
    codigo_externo,
  }: IRequest): Promise<Estabelecimento> {
    const EstabelecimentoRepositorio = await
      this.estabelecimentoRepositorio.buscarEstabelecimentoPorId(id);

    if (!EstabelecimentoRepositorio) {
      throw new AppError('Estabelecimento não encontrado!');
    }

    const estabelecimentoExiste = await
      this.estabelecimentoRepositorio.buscarEstabelecimentoPorDescricao(descricao);

    if (estabelecimentoExiste && estabelecimentoExiste.id !== EstabelecimentoRepositorio.id) {
      throw new AppError('Estabelecimento já cadastrado!');
    }

    EstabelecimentoRepositorio.descricao = descricao;
    EstabelecimentoRepositorio.inativo = inativo;
    EstabelecimentoRepositorio.ordem = ordem;
    EstabelecimentoRepositorio.codigo_externo = codigo_externo ? codigo_externo : "";

    const novoEstabelecimento = await this.estabelecimentoRepositorio.salvar(EstabelecimentoRepositorio);

    return novoEstabelecimento;
  }
}

export default AlterarEstabelecimentoService;
