-- DropForeignKey
ALTER TABLE "messages" DROP CONSTRAINT "messages_buyerId_fkey";

-- DropForeignKey
ALTER TABLE "messages" DROP CONSTRAINT "messages_sellerId_fkey";

-- AlterTable
ALTER TABLE "messages" ALTER COLUMN "buyerId" SET DATA TYPE TEXT,
ALTER COLUMN "sellerId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "users"("userAdd") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "users"("userAdd") ON DELETE RESTRICT ON UPDATE CASCADE;
