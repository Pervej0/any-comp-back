import { Decimal } from "@prisma/client/runtime/library";

export type VerificationStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

export interface TSpecialist {
  id: string;
  average_rating?: Decimal | number;
  is_draft: boolean;
  total_number_of_ratings: number;
  title: string;
  slug: string;
  description?: string;
  base_price: Decimal | number;
  platform_fee?: Decimal | number;
  final_price?: Decimal | number;
  verification_status: VerificationStatus;
  is_verified: boolean;
  duration_days?: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}
