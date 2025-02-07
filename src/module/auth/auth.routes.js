import { Router } from 'express';
import { configurationOTP, signup, login, simpleLogin } from './auth.controller.js';

export const authRouter = Router();

// User Signup step 1
authRouter.post('/signup', signup);

// User Signup step 2
authRouter.post('/configuration/OTP', configurationOTP);

// User login
authRouter.post('/signin', login);

authRouter.post('/login', simpleLogin);

 
