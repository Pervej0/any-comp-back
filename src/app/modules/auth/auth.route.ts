import express from 'express';
import { changePassword, loginUser } from './auth.controller';
import validationChecker from '../../middleware/validationChecker';
import auth from '../../middleware/auth';
import { UserRole } from '../../../generated/prisma/enums';
import { loginValidationSchema } from './auth.zodValidation';
const router = express.Router();

router.post('/login', validationChecker(loginValidationSchema), loginUser);
router.post(
  '/change-password',
  req => console.log(req.body),
  auth(UserRole.admin, UserRole.user),
  changePassword
);
const authRouter = router;

export default authRouter;
