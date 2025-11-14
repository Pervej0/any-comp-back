import { MediaType, MimeType } from '../../../generated/prisma/enums';

export interface TMedia {
  id: string;
  specialists?: string; // FK to Specialist
  file_name: string;
  file_size: number;
  display_order: number;
  mime_type: MimeType;
  media_type: MediaType;
  uploaded_at?: Date;
  deleted_at?: Date;
  created_at: Date;
  updated_at: Date;
}
