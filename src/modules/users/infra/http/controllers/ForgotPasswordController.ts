import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotPasswordEmailSerivce from '@modules/users/services/SendForgotPasswordEmailSerivce';

export default class ForgotPassowrdController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgotPasswordEmail = container.resolve(
      SendForgotPasswordEmailSerivce,
    );

    await sendForgotPasswordEmail.execute({
      email,
    });

    return response.status(204).json();
  }
}
