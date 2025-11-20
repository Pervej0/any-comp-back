import prisma from '../../lib/prisma';
import { TMedia } from './media.interface';

export const createMediaDB = async (data: TMedia) => {
  return prisma.media.create({ data });
};

export const getAllMediaDB = async () => {
  return prisma.media.findMany();
};

export const getMediaByIdDB = async (id: string) => {
  return prisma.media.findUnique({ where: { id } });
};

export const updateMediaDB = async (id: string, data: Partial<TMedia>) => {
  return prisma.media.update({
    where: { id },
    data,
  });
};

export const deleteMediaDB = async (id: string) => {
  return prisma.media.delete({ where: { id } });
};
