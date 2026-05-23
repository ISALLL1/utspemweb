/*
  Warnings:

  - You are about to drop the column `name` on the `category_event` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `events` table. All the data in the column will be lost.
  - Added the required column `nama` to the `category_event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speakerId` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "category_event" DROP COLUMN "name",
ADD COLUMN     "nama" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "events" DROP COLUMN "name",
ADD COLUMN     "nama" TEXT NOT NULL,
ADD COLUMN     "speakerId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "speakers" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "materi" TEXT,
    "jabatan" TEXT NOT NULL,
    "foto" TEXT NOT NULL,

    CONSTRAINT "speakers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_speakerId_fkey" FOREIGN KEY ("speakerId") REFERENCES "speakers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
