import { Router } from 'express';

import ListarEstadoController from '../controllers/ListarEstadoController';

import garantirAutenticacao from '@modules/usuarios/infra/http/middlewares/garantirAutenticacao';

const estadosRouter = Router();
const listarEstadoController = new ListarEstadoController();

estadosRouter.get(
  '/',
  garantirAutenticacao,  
  listarEstadoController.show,
);

export default estadosRouter;
