/*
  Warnings:

  - You are about to drop the column `sky` on the `Inventory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sku]` on the table `Inventory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sku` to the `Inventory` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Inventory_sky_key";

-- AlterTable
ALTER TABLE "Inventory" DROP COLUMN "sky",
ADD COLUMN     "sku" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Inventory_sku_key" ON "Inventory"("sku");
