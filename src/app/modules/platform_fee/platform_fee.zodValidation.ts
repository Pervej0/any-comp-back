import { z } from 'zod';
import { TierName } from '../../../generated/prisma/enums';

const tierNameEnum = z.enum(TierName);

export const createPlatformFeeSchema = z.object({
  body: z.object({
    tier_name: tierNameEnum,
    min_value: z.number().nonnegative('Minimum value cannot be negative'),
    max_value: z.number().nonnegative('Maximum value cannot be negative'),
    platform_fee_percentage: z.number().nonnegative('Platform fee percentage cannot be negative'),
  }),
});

export const updatePlatformFeeSchema = z.object({
  body: z.object({
    tier_name: tierNameEnum.optional(),
    min_value: z.number().nonnegative('Minimum value cannot be negative').optional(),
    max_value: z.number().nonnegative('Maximum value cannot be negative').optional(),
    platform_fee_percentage: z
      .number()
      .nonnegative('Platform fee percentage cannot be negative')
      .optional(),
  }),
});
