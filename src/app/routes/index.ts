import express from 'express';
import userRouter from '../modules/user/user.route';
import authRouter from '../modules/auth/auth.route';
import specialistRouter from '../modules/specialist/specialist.route';
import mediaRouter from '../modules/media/media.route';
import platformFeeRouter from '../modules/platform_fee/platform_fee.route';
import serviceOfferingsRouter from '../modules/service_offerings/service_offerings.route';
const router = express.Router();

const allRoutes = [
  { route: serviceOfferingsRouter },
  { route: platformFeeRouter },
  { route: mediaRouter },
  { route: specialistRouter },
  { route: authRouter },
  {
    route: userRouter,
  },
];

allRoutes.forEach(rt => router.use('/api', rt.route));

const rootRoute = router;
export default rootRoute;
