/*
  Warnings:

  - You are about to drop the column `category_id` on the `events` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "events" DROP COLUMN "category_id",
ADD COLUMN     "categoryId" TEXT NOT NULL;
