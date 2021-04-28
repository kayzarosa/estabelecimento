import { Router } from 'express';

import EstabelecimentoController from '../controllers/EstabelecimentoController';
import ListaEstabelecimentoController from '../controllers/ListaEstabelecimentoController';

import { celebrate, Segments, Joi } from 'celebrate';

import garantirAutenticacao from '@modules/usuarios/infra/http/middlewares/garantirAutenticacao';

const estabelecimentoRouter = Router();
const estabelecimentoController = new EstabelecimentoController();
const listaEstabelecimentoController = new ListaEstabelecimentoController();

estabelecimentoRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      descricao: Joi.string().required(),
      inativo: Joi.boolean(),
      ordem: Joi.number().required(),
      codigo_externo: Joi.string()
    },
  }),
  garantirAutenticacao,
  estabelecimentoController.create,
);

estabelecimentoRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      descricao: Joi.string().required(),
      inativo: Joi.boolean(),
      ordem: Joi.number().required(),
      codigo_externo: Joi.string(),
    },
  }),
  garantirAutenticacao,
  estabelecimentoController.update,
);

estabelecimentoRouter.get(
  '/',
  garantirAutenticacao,
  estabelecimentoController.show,
);

estabelecimentoRouter.get(
  '/ativas',
  listaEstabelecimentoController.show,
);

estabelecimentoRouter.delete(
  '/:id',
  estabelecimentoController.delete,
);

export default estabelecimentoRouter;
