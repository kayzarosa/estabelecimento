import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';
import { celebrate, Segments, Joi } from 'celebrate';

import UsuarioController from '../controllers/UsuarioController';
import UsuarioFotoController from '../controllers/UsuarioFotoController';
import AlterarUsuarioController from '../controllers/AlterarUsuarioController';
import AlterarSenhaUsuarioController from '../controllers/AlterarSenhaUsuarioController';

import garantirAutenticacao from '../middlewares/garantirAutenticacao';

const usuarioRouter = Router();
const usuarioController = new UsuarioController();
const usuarioFotoController = new UsuarioFotoController();
const alterarUsuarioController = new AlterarUsuarioController();
const alterarSenhaUsuarioController = new AlterarSenhaUsuarioController();

const upload = multer(uploadConfig.multer);

usuarioRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      cpf_cnpj: Joi.string().required(),
      nome_razao_social: Joi.string().required(),
      email: Joi.string().email().required(),
      senha: Joi.string().required(),
    },
  }),
  usuarioController.create,
);

usuarioRouter.patch(
  '/foto',
  garantirAutenticacao,
  upload.single('foto'),
  usuarioFotoController.update,
);

usuarioRouter.put(
  '/alterar',
  celebrate({
    [Segments.BODY]: {
      cpf_cnpj: Joi.string().required(),
      nome_razao_social: Joi.string().required(),
      apelido_nome_fantasia: Joi.string().required(),
      logradouro:Joi.string().required(),
      numero: Joi.string().required(),
      complemento: Joi.string(),
      cep: Joi.string().required(),
      bairro: Joi.string().required(),
      estado_id: Joi.number().required(),
      cidade_id: Joi.number().required(),
      email: Joi.string().email().required(),
      telefone: Joi.string().required()
    },
  }),
  garantirAutenticacao,
  alterarUsuarioController.update,
);

usuarioRouter.put(
  '/alterar-senha/:usuarioId',
  celebrate({
    [Segments.BODY]: {
      senha: Joi.string().required(),
    },
  }),
  garantirAutenticacao,
  alterarSenhaUsuarioController.update,
);

export default usuarioRouter;
