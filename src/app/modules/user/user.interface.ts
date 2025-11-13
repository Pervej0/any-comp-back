import { userRole, userStatus } from '../../../generated/prisma/enums';

export type TUser = {
  name: string;
  email: string;
  password: string;
  status: userStatus;
  role: userRole;
};
