import { container } from 'tsyringe';

import './providers';

import IUsuarioRepositorio from '@modules/usuarios/repositories/IUsuarioRepositorio';
import UsuarioRepositorio from '@modules/usuarios/infra/typeorm/repositories/UsuarioRepositorio';

import IUsuarioTokenRepositorio from '@modules/usuarioToken/repositories/IUsuarioTokenRepositorio';
import UsuarioTokenRepositorio from '@modules/usuarioToken/infra/typeorm/repositories/UsuarioTokenRepositorio';

import IEstadoRepositorio from '@modules/estados/repositories/IEstadoRepositorio';
import EstadoRepositorio from '@modules/estados/infra/typeorm/repositories/EstadoRepositorio';

import ICidadeRepositorio from '@modules/cidades/repositories/ICidadeRepositorio';
import CidadeRepositorio from '@modules/cidades/infra/typeorm/repositories/CidadeRepositorio';

import IEstabelecimentoRepositorio from '@modules/estabelecimentos/repositories/IEstabelecimentoRepositorio';
import EstabelecimentoRepositorio from '@modules/estabelecimentos/infra/typeorm/repositories/EstabelecimentoRepositorio';

container.registerSingleton<IUsuarioRepositorio>(
  'UsuarioRepositorio',
  UsuarioRepositorio,
);

container.registerSingleton<IUsuarioTokenRepositorio>(
  'UsuarioTokenRepositorio',
  UsuarioTokenRepositorio,
);

container.registerSingleton<IEstadoRepositorio>(
  'EstadoRepositorio',
  EstadoRepositorio,
);

container.registerSingleton<ICidadeRepositorio>(
  'CidadeRepositorio',
  CidadeRepositorio,
);

container.registerSingleton<IEstabelecimentoRepositorio>(
  'EstabelecimentoRepositorio',
  EstabelecimentoRepositorio,
);
