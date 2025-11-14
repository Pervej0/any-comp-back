import { Router } from 'express';
import {
  createPlatformFee,
  getAllPlatformFees,
  getPlatformFeeById,
  updatePlatformFee,
  deletePlatformFee,
} from './platform_fee.controller';

import auth from '../../middleware/auth';
import { UserRole } from '../../../generated/prisma/enums';
import validationChecker from '../../middleware/validationChecker';
import { createPlatformFeeSchema, updatePlatformFeeSchema } from './platform_fee.zodValidation';

const router = Router();

router.post(
  '/platform-fee',
  auth(UserRole.admin),
  validationChecker(createPlatformFeeSchema),
  createPlatformFee
);

router.get('/platform-fee', auth(UserRole.admin, UserRole.user), getAllPlatformFees);

router.get('/platform-fee/:id', auth(UserRole.admin, UserRole.user), getPlatformFeeById);

router.put(
  '/platform-fee/:id',
  auth(UserRole.admin),
  validationChecker(updatePlatformFeeSchema),
  updatePlatformFee
);

router.delete('/platform-fee/:id', auth(UserRole.admin), deletePlatformFee);

const platformFeeRouter = router;
export default platformFeeRouter;
