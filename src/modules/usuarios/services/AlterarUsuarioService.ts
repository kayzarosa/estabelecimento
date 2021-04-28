import { injectable, inject } from 'tsyringe';
import { v4 as uuidV4 } from 'uuid';

import IUsuarioRepositorio from '../repositories/IUsuarioRepositorio';
import Usuario from '../infra/typeorm/entities/Usuario';
import AppError from '@shared/errors/AppError';

interface IRequest {
  cpf_cnpj: string;
  nome_razao_social: string;
  apelido_nome_fantasia: string;
  logradouro: string;
  numero: string;
  complemento?: string;
  cep: string;
  bairro: string;
  estado_id: number;
  cidade_id: number;
  email: string;
  telefone: string;
}

@injectable()
class AlterarUsuarioService {
  constructor(
    @inject('UsuarioRepositorio')
    private usuarioRepositorio: IUsuarioRepositorio,
  ) { }

  public async execute({
    cpf_cnpj,
    nome_razao_social,
    apelido_nome_fantasia,
    logradouro,
    numero,
    complemento,
    cep,
    bairro,
    estado_id,
    cidade_id,
    email,
    telefone,
  }: IRequest): Promise<Usuario> {
    const usuario = await
      this.usuarioRepositorio.buscarCpfCnpjUsuario(cpf_cnpj);

    if (!usuario) {
      throw new AppError('Usuário não encontrada!');
    }

    const usuarioData = {
      id: usuario.id,
      nome_razao_social,
      apelido_nome_fantasia,
      logradouro,
      numero,
      complemento: complemento ? complemento : "",
      cep,
      bairro,
      estado_id,
      cidade_id,
      email,
      telefone,
      codigo_integracao: usuario.codigo_integracao ? usuario.codigo_integracao : uuidV4()
    } as Usuario;

    await this.usuarioRepositorio.salvar(usuarioData);

    usuario.cpf_cnpj = cpf_cnpj;
    usuario.nome_razao_social = nome_razao_social;
    usuario.apelido_nome_fantasia = apelido_nome_fantasia;
    usuario.logradouro = logradouro;
    usuario.numero = numero;
    usuario.complemento = complemento ? complemento : "";
    usuario.cep = cep;
    usuario.bairro = bairro;
    usuario.estado_id = estado_id;
    usuario.cidade_id = cidade_id;
    usuario.email = email;
    usuario.telefone = telefone;
    usuario.codigo_integracao = usuarioData.codigo_integracao;

    return usuario;
  }
}

export default AlterarUsuarioService;
