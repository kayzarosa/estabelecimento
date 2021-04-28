import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '@config/auth';

import AppError from '@shared/errors/AppError';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function garantirAutenticacao(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authenticateToken = request.headers.authorization;

  if (!authenticateToken) {
    throw new AppError('Token não encontrado', 401);
  }

  const [, token] = authenticateToken.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded as ITokenPayload;

    request.usuario = {
      id: Number(sub),
    };

    return next();
  } catch (err) {
    throw new AppError('Token inválido', 401);
  }
}
