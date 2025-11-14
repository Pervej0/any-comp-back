import express from 'express';
import validationChecker from '../../middleware/validationChecker';
import auth from '../../middleware/auth';
import { UserRole } from '../../../generated/prisma/enums';
import { createSpecialistSchema, updateSpecialistSchema } from './specialist.zodValidation';
import {
  createSpecialist,
  deleteSpecialist,
  getAllSpecialist,
  updateSpecialist,
} from './specialist.controller';
const router = express.Router();

router.post('/', auth(UserRole.admin), validationChecker(createSpecialistSchema), createSpecialist);

router.get('/', auth(UserRole.admin, UserRole.user), getAllSpecialist);

router.put(
  '/:id',
  auth(UserRole.admin),
  validationChecker(updateSpecialistSchema),
  updateSpecialist
);

router.delete('/:id', auth(UserRole.admin), deleteSpecialist);

const specialistRouter = router;

export default specialistRouter;
