import { Router } from 'express';
import ForgotPassowrdController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';

const passwordRouter = Router();
const forgotPasswordController = new ForgotPassowrdController();
const resetPasswordController = new ResetPasswordController();

passwordRouter.post('/forgot', forgotPasswordController.create);

passwordRouter.post('/reset', resetPasswordController.create);

export default passwordRouter;
