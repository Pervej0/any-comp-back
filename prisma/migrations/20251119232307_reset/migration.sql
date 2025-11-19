-- CreateEnum
CREATE TYPE "public"."UserStatus" AS ENUM ('activate', 'deactivate');

-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('user', 'admin');

-- CreateEnum
CREATE TYPE "public"."VerificationStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "public"."MimeType" AS ENUM ('image', 'video', 'pdf', 'audio', 'other');

-- CreateEnum
CREATE TYPE "public"."MediaType" AS ENUM ('avatar', 'banner', 'document', 'certificate', 'gallery', 'other');

-- CreateEnum
CREATE TYPE "public"."TierName" AS ENUM ('BASIC', 'STANDARD', 'PREMIUM');

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "public"."UserRole" NOT NULL,
    "password" TEXT NOT NULL,
    "status" "public"."UserStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."specialists" (
    "id" TEXT NOT NULL,
    "average_rating" DECIMAL(65,30),
    "is_draft" BOOLEAN NOT NULL DEFAULT false,
    "total_number_of_ratings" INTEGER NOT NULL DEFAULT 0,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "base_price" DECIMAL(65,30) NOT NULL,
    "platform_fee" DECIMAL(65,30),
    "final_price" DECIMAL(65,30),
    "verification_status" "public"."VerificationStatus" NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "duration_days" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "specialists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."media" (
    "id" TEXT NOT NULL,
    "specialists" TEXT,
    "file_name" TEXT NOT NULL,
    "file_size" INTEGER NOT NULL,
    "display_order" INTEGER NOT NULL,
    "mime_type" "public"."MimeType" NOT NULL,
    "media_type" "public"."MediaType" NOT NULL,
    "uploaded_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."platform_fee" (
    "id" TEXT NOT NULL,
    "tier_name" "public"."TierName" NOT NULL,
    "min_value" INTEGER NOT NULL,
    "max_value" INTEGER NOT NULL,
    "platform_fee_percentage" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "platform_fee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."service_offerings" (
    "id" TEXT NOT NULL,
    "specialists" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "service_offerings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- AddForeignKey
ALTER TABLE "public"."media" ADD CONSTRAINT "media_specialists_fkey" FOREIGN KEY ("specialists") REFERENCES "public"."specialists"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."service_offerings" ADD CONSTRAINT "service_offerings_specialists_fkey" FOREIGN KEY ("specialists") REFERENCES "public"."specialists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
