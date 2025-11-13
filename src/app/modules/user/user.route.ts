import express from 'express';
import {
  changeUserRoleAndStatus,
  createUser,
  deleteUser,
  getAUser,
  getAllUser,
  updateUser,
} from './user.controller';
import { userRole } from '../../../generated/prisma/enums';
import { UpdateUserValidationSchema, userValidationSchema } from './user.zodValidation';
import validationChecker from '../../middleware/validationChecker';
import auth from '../../middleware/auth';
const router = express.Router();

router.get('/profile', auth(userRole.user, userRole.admin), getAUser);
router.get('/profiles', auth(userRole.admin), getAllUser);
router.post('/register', validationChecker(userValidationSchema), createUser);
router.put(
  '/profile',
  auth(userRole.user, userRole.admin),
  validationChecker(UpdateUserValidationSchema),
  updateUser
);
router.delete('/profiles/:userId', auth(userRole.admin), deleteUser);
router.put('/change-user-role-status', auth(userRole.admin), changeUserRoleAndStatus);

const userRouter = router;

export default userRouter;
