import { PrismaClient } from '../../../generated/prisma/client';
import { TPlatformFee } from './platform_fee.interface';

const prisma = new PrismaClient();

export const createPlatformFeeDB = async (data: TPlatformFee) => {
  return prisma.platform_fee.create({ data });
};

export const getAllPlatformFeesDB = async () => {
  return prisma.platform_fee.findMany();
};

export const getPlatformFeeByIdDB = async (id: string) => {
  return prisma.platform_fee.findUnique({ where: { id } });
};

export const updatePlatformFeeDB = async (id: string, data: Partial<TPlatformFee>) => {
  return prisma.platform_fee.update({
    where: { id },
    data,
  });
};

export const deletePlatformFeeDB = async (id: string) => {
  return prisma.platform_fee.delete({ where: { id } });
};
