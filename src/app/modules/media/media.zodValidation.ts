import { z } from 'zod';
import { MediaType, MimeType } from '../../../generated/prisma/enums';

export const createMediaSchema = z.object({
  body: z.object({
    specialists: z.string().optional(),
    file_name: z.string().nonempty('File name cannot be empty'),
    file_size: z.number().positive('File size must be greater than 0'),
    display_order: z.number().nonnegative('Display order cannot be negative'),
    mime_type: z.enum(MimeType).refine(val => Object.values(MimeType).includes(val), {
      message: 'Invalid MIME type',
    }),
    media_type: z.enum(MediaType).refine(val => Object.values(MediaType).includes(val), {
      message: 'Invalid media type',
    }),
    uploaded_at: z.date().optional(),
    deleted_at: z.date().optional(),
  }),
});

export const updateMediaSchema = z.object({
  body: z.object({
    specialists: z.string().optional(),
    file_name: z.string().nonempty('File name cannot be empty').optional(),
    file_size: z.number().positive('File size must be greater than 0').optional(),
    display_order: z.number().nonnegative('Display order cannot be negative').optional(),
    mime_type: z
      .nativeEnum(MimeType)
      .optional()
      .refine(val => val === undefined || Object.values(MimeType).includes(val), {
        message: 'Invalid MIME type',
      }),
    media_type: z
      .nativeEnum(MediaType)
      .optional()
      .refine(val => val === undefined || Object.values(MediaType).includes(val), {
        message: 'Invalid media type',
      }),
    uploaded_at: z.date().optional(),
    deleted_at: z.date().optional(),
  }),
});
