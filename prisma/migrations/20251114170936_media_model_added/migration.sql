-- CreateEnum
CREATE TYPE "MimeType" AS ENUM ('image', 'video', 'pdf', 'audio', 'other');

-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('avatar', 'banner', 'document', 'certificate', 'gallery', 'other');

-- CreateTable
CREATE TABLE "media" (
    "id" TEXT NOT NULL,
    "specialists" TEXT,
    "file_name" TEXT NOT NULL,
    "file_size" INTEGER NOT NULL,
    "display_order" INTEGER NOT NULL,
    "mime_type" "MimeType" NOT NULL,
    "media_type" "MediaType" NOT NULL,
    "uploaded_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "media_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_specialists_fkey" FOREIGN KEY ("specialists") REFERENCES "specialists"("id") ON DELETE SET NULL ON UPDATE CASCADE;
