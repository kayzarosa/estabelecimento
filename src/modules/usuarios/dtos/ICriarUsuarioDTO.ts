export default interface ICriarUsuarioDTO {
  cpf_cnpj: string;
  nome_razao_social: string;
  email: string;
  senha: string;
  codigo_integracao: string;
  usuario_ativo?: boolean;
}
