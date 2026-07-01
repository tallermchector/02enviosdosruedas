-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('LOW_COST', 'EXPRESS');

-- CreateTable
CREATE TABLE "PriceRange" (
    "id" SERIAL NOT NULL,
    "serviceType" "ServiceType" NOT NULL,
    "distanciaMinKm" DOUBLE PRECISION NOT NULL,
    "distanciaMaxKm" DOUBLE PRECISION NOT NULL,
    "precioRango" DOUBLE PRECISION NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "PriceRange_pkey" PRIMARY KEY ("id")
);
