import { Router } from 'express';
import {
  createServiceOffering,
  getAllServiceOfferings,
  getServiceOfferingById,
  updateServiceOffering,
  deleteServiceOffering,
} from './service_offerings.controller';
import auth from '../../middleware/auth';
import { UserRole } from '../../../generated/prisma/enums';
import {
  createServiceOfferingSchema,
  updateServiceOfferingSchema,
} from './service_offerings.zodValidation';
import validationChecker from '../../middleware/validationChecker';

const router = Router();

router.post(
  '/service-offerings',
  auth(UserRole.admin),
  validationChecker(createServiceOfferingSchema),
  createServiceOffering
);

router.get('/service-offerings', auth(UserRole.admin, UserRole.user), getAllServiceOfferings);

router.get('/service-offerings/:id', auth(UserRole.admin, UserRole.user), getServiceOfferingById);

router.put(
  '/service-offerings/:id',
  auth(UserRole.admin),
  validationChecker(updateServiceOfferingSchema),
  updateServiceOffering
);

router.delete('/service-offerings/:id', auth(UserRole.admin), deleteServiceOffering);

const serviceOfferingsRouter = router;
export default serviceOfferingsRouter;
