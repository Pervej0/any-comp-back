import { UserRole, UserStatus } from '../../../generated/prisma/enums';

export type TUser = {
  name: string;
  email: string;
  password: string;
  status: UserStatus;
  role: UserRole;
};
