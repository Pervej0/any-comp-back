import express from 'express';
import validationChecker from '../../middleware/validationChecker';
import auth from '../../middleware/auth';
import { UserRole } from '../../../generated/prisma/enums';
import { createSpecialistSchema, updateSpecialistSchema } from './specialist.zodValidation';
import {
  createSpecialist,
  deleteSpecialist,
  getAllSpecialist,
  getSpecialist,
  updateSpecialist,
} from './specialist.controller';
const router = express.Router();

router.post(
  '/specialist',
  auth(UserRole.admin),
  validationChecker(createSpecialistSchema),
  createSpecialist
);

router.get('/specialists', auth(UserRole.admin, UserRole.user), getAllSpecialist);
router.get('/specialist/:id', auth(UserRole.admin, UserRole.user), getSpecialist);

router.patch(
  '/specialists/:id',
  auth(UserRole.admin),
  validationChecker(updateSpecialistSchema),
  updateSpecialist
);

router.delete('/:id', auth(UserRole.admin), deleteSpecialist);

const specialistRouter = router;

export default specialistRouter;
