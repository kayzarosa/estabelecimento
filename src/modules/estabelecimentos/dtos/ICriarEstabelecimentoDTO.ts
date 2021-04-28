export default interface ICriarEstabelecimentoDTO {
  descricao: string;
  inativo: boolean;
  ordem: number;
  codigo_externo?: string;
}