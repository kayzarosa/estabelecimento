export default interface IUsuarioDTO {
  cpf_cnpj: string;
  subdominio: string;
  nome_razao_social: string;
  apelido_nome_fantasia: string;
  logradouro: string;
  numero: string;
  complemento: string;
  cep: string;
  bairro: string;
  estado_id: number;
  cidade_id: number;
  email: string;
  telefone: string;
  codigo_integracao: string;
}
