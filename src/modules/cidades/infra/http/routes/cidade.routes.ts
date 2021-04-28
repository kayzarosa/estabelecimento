import { Router } from 'express';

import ListarCidadeController from '../controllers/ListarCidadeController';

import garantirAutenticacao from '@modules/usuarios/infra/http/middlewares/garantirAutenticacao';

const cidadeRouter = Router();
const listarCidadeController = new ListarCidadeController();

cidadeRouter.get(
  '/:estado_id',
  garantirAutenticacao,  
  listarCidadeController.show,
);

export default cidadeRouter;
