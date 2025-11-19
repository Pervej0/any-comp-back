import { PrismaClient } from '../../../generated/prisma/client';
import { TSpecialist } from './specialist.interface';

const prisma = new PrismaClient();

export const createSpecialistDB = async (data: TSpecialist) => {
  return prisma.specialist.create({ data });
};

export const getAllSpecialistDB = async () => {
  return prisma.specialist.findMany();
};

export const getSpecialistDB = async (id: string) => {
  return prisma.specialist.findUnique({ where: { id } });
};
export const upsertSpecialistDB = async (id: string, data: Partial<TSpecialist>) => {
  const upserted = await prisma.specialist.upsert({
    where: { id },
    update: {
      ...data,
      deleted_at: data.deleted_at ?? undefined,
      created_at: data.created_at ?? undefined,
    },
    create: data as TSpecialist,
  });

  return upserted;
};

export const updateSpecialistDB = async (id: string, data: Partial<TSpecialist>) => {
  try {
    const updated = await prisma.specialist.update({
      where: { id },
      data: {
        ...data,
        deleted_at: data.deleted_at ?? undefined,
        created_at: data.created_at ?? undefined,
      },
    });

    return updated;
  } catch (error) {
    console.error('Failed to update specialist:', error);
    throw error;
  }
};

export const deleteSpecialistDB = async (id: string) => {
  return prisma.specialist.delete({
    where: { id },
  });
};
