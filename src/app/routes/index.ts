import express from 'express';
import userRouter from '../modules/user/user.route';
import authRouter from '../modules/auth/auth.route';
import specialistRouter from '../modules/specialist/specialist.route';
const router = express.Router();

const allRoutes = [
  { route: specialistRouter },
  { route: authRouter },
  {
    route: userRouter,
  },
];

allRoutes.forEach(rt => router.use('/api', rt.route));

const rootRoute = router;
export default rootRoute;
