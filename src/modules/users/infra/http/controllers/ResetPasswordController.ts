import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ResetPasswordSerivce from '@modules/users/services/ResetPasswordService';

export default class ResetPassowrdController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { password, token } = request.body;

    const resetPassword = container.resolve(ResetPasswordSerivce);

    await resetPassword.execute({
      token,
      password,
    });

    return response.status(204).json();
  }
}
