import ICriarEstadoDTO from '@modules/estados/dtos/ICriarEstadoDTO';
import IEstadoRepositorio from '../IEstadoRepositorio';
import Estado from '@modules/estados/infra/typeorm/entities/Estado';

class FakeEstadoRepositorio implements IEstadoRepositorio {
  private estados: Estado[] = [];

  public async listarEstados(): Promise<Estado[] | []> {
    return this.estados || [];
  }

  public async buscarEstadoSigla(sigla: string): Promise<Estado | undefined> {
    return this.estados.find(
      estadoFind => estadoFind.sigla === sigla
    );
  }

  public async buscarEstadoPorId(estadoId: number): Promise<Estado | undefined> {
    return this.estados.find(
      estadoFind => estadoFind.id === estadoId
    );
  }

  public async criar(estado: ICriarEstadoDTO):
    Promise<Estado> {
    const novoEstado = new Estado();

    Object.assign(novoEstado, { id: Number(this.estados.length + 1) }, estado);

    this.estados.push(novoEstado);

    return novoEstado;
  }

}

export default FakeEstadoRepositorio;
