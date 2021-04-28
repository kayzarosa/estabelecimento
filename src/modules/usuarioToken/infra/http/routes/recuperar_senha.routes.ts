import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import RecuperacaoSenhaUsuarioController from '../controllers/RecuperacaoSenhaUsuarioController';
import RedefinirSenhaUsuarioController from '../controllers/RedefinirSenhaUsuarioController';

const recuperarSenhaRouter = Router();
const recuperacaoSenhaUsuarioController = new RecuperacaoSenhaUsuarioController();
const redefinirSenhaUsuarioController = new RedefinirSenhaUsuarioController();

recuperarSenhaRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  }),
  recuperacaoSenhaUsuarioController.create,
);

recuperarSenhaRouter.post(
  '/redefinir',
  celebrate({
    [Segments.BODY]: {
      token: Joi.string().required(),
      senha: Joi.string().required(),
    },
  }),
  redefinirSenhaUsuarioController.create,
);

export default recuperarSenhaRouter;
