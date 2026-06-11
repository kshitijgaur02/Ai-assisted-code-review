-- CreateTable
CREATE TABLE "analyses" (
    "id" TEXT NOT NULL,
    "instruction" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "result" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "analyses_pkey" PRIMARY KEY ("id")
);
