-- CreateTable
CREATE TABLE "Tutorial" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "published" BOOLEAN DEFAULT false,

    CONSTRAINT "Tutorial_pkey" PRIMARY KEY ("id")
);
