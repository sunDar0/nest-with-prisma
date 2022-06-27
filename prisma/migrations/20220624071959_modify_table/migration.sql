/*
  Warnings:

  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `EmotionCategories` MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `EmotionUsers` MODIFY `updated_at` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `Admin`;
