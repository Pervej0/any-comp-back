import { z } from 'zod';

export const createServiceOfferingSchema = z.object({
  body: z.object({
    specialists: z.string().nonempty('Specialist ID cannot be empty'),
  }),
});

export const updateServiceOfferingSchema = z.object({
  body: z.object({
    specialists: z.string().nonempty('Specialist ID cannot be empty').optional(),
  }),
});
