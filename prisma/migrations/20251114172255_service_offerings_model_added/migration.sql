-- CreateTable
CREATE TABLE "service_offerings" (
    "id" TEXT NOT NULL,
    "specialists" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "service_offerings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "service_offerings" ADD CONSTRAINT "service_offerings_specialists_fkey" FOREIGN KEY ("specialists") REFERENCES "specialists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
