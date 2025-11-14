import { z } from 'zod';

const verificationStatusEnum = z.enum(['PENDING', 'APPROVED', 'REJECTED']);

export const createSpecialistSchema = z.object({
  title: z.string().nonempty('Title cannot be empty'),
  slug: z.string().nonempty('Slug cannot be empty'),
  description: z.string().optional(),
  base_price: z.number(),
  platform_fee: z.number().optional(),
  final_price: z.number().optional(),
  verification_status: verificationStatusEnum,
  is_verified: z.boolean().optional(),
  is_draft: z.boolean().optional(),
  average_rating: z.number().optional(),
  total_number_of_ratings: z.number().optional(),
  duration_days: z.number().optional(),
  deleted_at: z.date().optional(),
});

export const updateSpecialistSchema = z.object({
  title: z.string().nonempty('Title cannot be empty').optional(),
  slug: z.string().nonempty('Slug cannot be empty').optional(),
  description: z.string().optional(),
  base_price: z.number().optional(),
  platform_fee: z.number().optional(),
  final_price: z.number().optional(),
  verification_status: verificationStatusEnum.optional(),
  is_verified: z.boolean().optional(),
  is_draft: z.boolean().optional(),
  average_rating: z.number().optional(),
  total_number_of_ratings: z.number().optional(),
  duration_days: z.number().optional(),
  deleted_at: z.date().optional(),
});
