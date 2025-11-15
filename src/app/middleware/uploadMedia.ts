// src/middlewares/uploadMedia.ts
import multer from 'multer';
import path from 'path';
import CustomError from '../errors/customError';
import { StatusCodes } from 'http-status-codes';

// Allowed MIME types based on your enum
const allowedMimeTypes = {
  image: ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'],
  video: ['video/mp4', 'video/mpeg', 'video/quicktime'],
  pdf: ['application/pdf'],
  audio: ['audio/mpeg', 'audio/wav', 'audio/mp3'],
  other: [
    'application/octet-stream',
    'text/plain',
    'application/msword',
    'application/vnd.ms-excel',
  ],
};

// Multer Storage — you can replace with S3/Cloudinary later
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, 'uploads/media'); // folder to upload into
  },
  filename: (_req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

// File filter
const fileFilter: multer.Options['fileFilter'] = (req, file, cb) => {
  const mime = file.mimetype;

  const isAllowed =
    allowedMimeTypes.image.includes(mime) ||
    allowedMimeTypes.video.includes(mime) ||
    allowedMimeTypes.pdf.includes(mime) ||
    allowedMimeTypes.audio.includes(mime) ||
    allowedMimeTypes.other.includes(mime);

  if (!isAllowed) {
    throw new CustomError(StatusCodes.BAD_REQUEST, 'Unsupported file type');
  }

  cb(null, true);
};

export const uploadMedia = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 20 * 1024 * 1024, // 20MB
  },
});
