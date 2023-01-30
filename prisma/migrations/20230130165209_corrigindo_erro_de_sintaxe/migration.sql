/*
  Warnings:

  - You are about to drop the column `categorie` on the `taskCategories` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[category]` on the table `taskCategories` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `taskCategories` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "taskCategories_categorie_key";

-- AlterTable
ALTER TABLE "taskCategories" DROP COLUMN "categorie",
ADD COLUMN     "category" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "taskCategories_category_key" ON "taskCategories"("category");
