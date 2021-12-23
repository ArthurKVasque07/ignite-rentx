import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { AppError } from '../errors/AppError';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string;
}


export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing!")
  }

  const [, token] = authHeader.split(" ")

  try {
    const { sub: user_id } = verify(token, "2c66894b259fa07f6fa02d8586dfcf7e") as IPayload

    const usersRepository = new UsersRepository()
    const user = usersRepository.findById(user_id)

    if (!user) {
      throw new AppError("User does not exists!", 401)
    }

    next()
  } catch {
    throw new AppError("Invalida token", 401)
  }

}
