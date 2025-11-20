import { UserRole, UserStatus } from '@prisma/client';

export type TUser = {
  name: string;
  email: string;
  password: string;
  status: UserStatus;
  role: UserRole;
};
