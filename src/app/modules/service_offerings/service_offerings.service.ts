import { PrismaClient } from '../../../generated/prisma/client';

const prisma = new PrismaClient();

export const createServiceOfferingDB = async (data: { specialists: string }) => {
  return prisma.service_offerings.create({ data });
};

export const getAllServiceOfferingsDB = async () => {
  return prisma.service_offerings.findMany();
};

export const getServiceOfferingByIdDB = async (id: string) => {
  return prisma.service_offerings.findUnique({ where: { id } });
};

export const updateServiceOfferingDB = async (
  id: string,
  data: Partial<{ specialists: string }>
) => {
  return prisma.service_offerings.update({
    where: { id },
    data,
  });
};

export const deleteServiceOfferingDB = async (id: string) => {
  return prisma.service_offerings.delete({ where: { id } });
};
