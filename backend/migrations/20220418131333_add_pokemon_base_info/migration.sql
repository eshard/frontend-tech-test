/*
  Warnings:

  - Added the required column `description` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `species` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Pokemon` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Pokemon" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "height" TEXT NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "species" TEXT NOT NULL,
ADD COLUMN     "types" TEXT[],
ADD COLUMN     "weight" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "name" SET NOT NULL;
DROP SEQUENCE "Pokemon_id_seq";
