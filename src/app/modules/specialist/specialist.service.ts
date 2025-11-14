import { PrismaClient } from '../../../generated/prisma/client';
import { TSpecialist } from './specialist.interface';

const prisma = new PrismaClient();

export const createSpecialistDB = async (data: TSpecialist) => {
  return prisma.specialist.create({ data });
};

export const getAllSpecialistDB = async () => {
  return prisma.specialist.findMany();
};

export const updateSpecialistDB = async (id: string, data: Partial<TSpecialist>) => {
  return prisma.specialist.update({
    where: { id },
    data,
  });
};

export const deleteSpecialistDB = async (id: string) => {
  return prisma.specialist.delete({
    where: { id },
  });
};
