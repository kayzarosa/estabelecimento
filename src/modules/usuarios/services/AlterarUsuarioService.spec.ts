import AppError from '@shared/errors/AppError';

import FakeUsuarioRepositorio from '../repositories/fakes/FakeUsuarioRepositorio';
import AlterarUsuarioService from './AlterarUsuarioService';

let fakeUsuarioRepositorio: FakeUsuarioRepositorio;
let alterarUsuario: AlterarUsuarioService;

describe('AtivarusuarioService', () => {
  beforeEach(() => {
    fakeUsuarioRepositorio = new FakeUsuarioRepositorio();

    alterarUsuario = new AlterarUsuarioService(
      fakeUsuarioRepositorio,
    );
  });

  it('deve salvar os demais dados da usuario', async () => {
    const usuario = await fakeUsuarioRepositorio.criar({
      cpf_cnpj: "12369865965",
      nome_razao_social: 'Jonh Doe',
      email: 'jonhdoe@gmail.com',
      senha: '123456',
      codigo_integracao: '36s9dw456'
    });

    expect(usuario).toHaveProperty('id');

    const dadosUsuario = {
      cpf_cnpj: usuario.cpf_cnpj,
      nome_razao_social: 'Alterando o nome da usuario',
      apelido_nome_fantasia: 'Nome fantasia',
      logradouro: 'Rua teste',
      numero: '36',
      complemento: 'Isso é um teste',
      cep: '38400086',
      bairro: 'Bairro Teste',
      estado_id: 1,
      cidade_id: 2,
      email: usuario.email,
      telefone: '3499856956',
    };

    const usuarioAlterada = await alterarUsuario.execute(dadosUsuario);

    expect(usuarioAlterada).toEqual(
      expect.objectContaining(
        {
          id: usuario.id,
          cpf_cnpj: "12369865965",
          nome_razao_social: 'Alterando o nome da usuario',
          apelido_nome_fantasia: 'Nome fantasia',
          logradouro: 'Rua teste',
          numero: '36',
          complemento: 'Isso é um teste',
          cep: '38400086',
          bairro: 'Bairro Teste',
          estado_id: 1,
          cidade_id: 2,
          email: 'jonhdoe@gmail.com',
          telefone: '3499856956',
          codigo_integracao: '36s9dw456'
        }
      ),
    );
  });

  it('deve salvar os dadis da usuario sem o codigo de integração', async () => {
    const usuario = await fakeUsuarioRepositorio.criar({
      cpf_cnpj: "12369865965",
      nome_razao_social: 'Jonh Doe',
      email: 'jonhdoe@gmail.com',
      senha: '123456',
      codigo_integracao: ""
    });

    expect(usuario).toHaveProperty('id');

    const dadosUsuario = {
      cpf_cnpj: usuario.cpf_cnpj,
      nome_razao_social: 'Alterando o nome da usuario',
      apelido_nome_fantasia: 'Nome fantasia',
      logradouro: 'Rua teste',
      numero: '36',
      complemento: 'Isso é um teste',
      cep: '38400086',
      bairro: 'Bairro Teste',
      estado_id: 1,
      cidade_id: 2,
      email: usuario.email,
      telefone: '3499856956'
    };

    const usuarioAlterada = await alterarUsuario.execute(dadosUsuario);

    expect(usuarioAlterada).toEqual(
      expect.objectContaining(
        {
          id: usuario.id,
          cpf_cnpj: "12369865965",
          nome_razao_social: 'Alterando o nome da usuario',
          apelido_nome_fantasia: 'Nome fantasia',
          logradouro: 'Rua teste',
          numero: '36',
          complemento: 'Isso é um teste',
          cep: '38400086',
          bairro: 'Bairro Teste',
          estado_id: 1,
          cidade_id: 2,
          email: 'jonhdoe@gmail.com',
          telefone: '3499856956',
          codigo_integracao: usuarioAlterada.codigo_integracao
        }
      ),
    );
  });

  it('deve salvar os demais dados da usuario e limpar os dados do complemento', async () => {
    const usuario = await fakeUsuarioRepositorio.criar({
      cpf_cnpj: "12369865965",
      nome_razao_social: 'Jonh Doe',
      email: 'jonhdoe@gmail.com',
      senha: '123456',
      codigo_integracao: '36s9dw456'
    });

    expect(usuario).toHaveProperty('id');

    const dadosUsuario = {
      cpf_cnpj: usuario.cpf_cnpj,
      nome_razao_social: 'Alterando o nome da usuario',
      apelido_nome_fantasia: 'Nome fantasia',
      logradouro: 'Rua teste',
      numero: '36',
      cep: '38400086',
      bairro: 'Bairro Teste',
      estado_id: 1,
      cidade_id: 2,
      email: usuario.email,
      telefone: '3499856956'
    };

    const usuarioAlterada = await alterarUsuario.execute(dadosUsuario);

    expect(usuarioAlterada).toEqual(
      expect.objectContaining(
        {
          id: usuario.id,
          cpf_cnpj: "12369865965",
          nome_razao_social: 'Alterando o nome da usuario',
          apelido_nome_fantasia: 'Nome fantasia',
          logradouro: 'Rua teste',
          numero: '36',
          cep: '38400086',
          bairro: 'Bairro Teste',
          estado_id: 1,
          cidade_id: 2,
          email: 'jonhdoe@gmail.com',
          telefone: '3499856956',
          codigo_integracao: '36s9dw456'
        }
      ),
    );
  });

  it('não deve encontrar a usuario a ser alterada', async () => {
    const dadosUsuario = {
      cpf_cnpj: "12369865965",
      nome_razao_social: 'Alterando o nome da usuário',
      apelido_nome_fantasia: 'Nome fantasia',
      logradouro: 'Rua teste',
      numero: '36',
      complemento: 'Isso é um teste',
      cep: '38400086',
      bairro: 'Bairro Teste',
      estado_id: 1,
      cidade_id: 2,
      email: 'jonhdoe@gmail.com',
      telefone: '3499856956'
    };

    await expect(
      alterarUsuario.execute(dadosUsuario)
    ).rejects.toBeInstanceOf(AppError);
  });
});
