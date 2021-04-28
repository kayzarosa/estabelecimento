import { Router } from 'express';

import usuarioRouter from '@modules/usuarios/infra/http/routes/usuario.routes';
import recuperarSenhaRouter from '@modules/usuarioToken/infra/http/routes/recuperar_senha.routes';
import sessionsRouter from '@modules/usuarios/infra/http/routes/sessions.routes';
import estabelecimentoRouter from '@modules/estabelecimentos/infra/http/routes/estabelecimento.routes';
import estadosRouter from '@modules/estados/infra/http/routes/estados.routes';
import cidadeRouter from '@modules/cidades/infra/http/routes/cidade.routes';


const routes = Router();

routes.use('/usuario', usuarioRouter);
routes.use('/recuperar', recuperarSenhaRouter);
routes.use('/sessao', sessionsRouter);
routes.use('/estabelecimento', estabelecimentoRouter);

routes.use('/estado', estadosRouter);
routes.use('/cidade', cidadeRouter);

export default routes;
