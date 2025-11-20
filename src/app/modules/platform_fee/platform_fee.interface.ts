import { TierName } from '@prisma/client';

export interface TPlatformFee {
  id: string;
  tier_name: TierName;
  min_value: number;
  max_value: number;
  platform_fee_percentage: number;
  created_at: Date;
  updated_at: Date;
}
