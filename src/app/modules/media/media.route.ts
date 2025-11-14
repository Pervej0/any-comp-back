import { Router } from 'express';
import {
  createMedia,
  getAllMedia,
  getMediaById,
  updateMedia,
  deleteMedia,
} from './media.controller';
import auth from '../../middleware/auth';
import { UserRole } from '../../../generated/prisma/enums';
import validationChecker from '../../middleware/validationChecker';
import { createMediaSchema, updateMediaSchema } from './media.zodValidation';

const router = Router();

router.post('/media', auth(UserRole.admin), validationChecker(createMediaSchema), createMedia);

router.get('/media', auth(UserRole.admin, UserRole.user), getAllMedia);

router.get('/media/:id', auth(UserRole.admin, UserRole.user), getMediaById);

router.put('/media/:id', auth(UserRole.admin), validationChecker(updateMediaSchema), updateMedia);

router.delete('/media/:id', auth(UserRole.admin), deleteMedia);

const mediaRouter = router;

export default mediaRouter;
