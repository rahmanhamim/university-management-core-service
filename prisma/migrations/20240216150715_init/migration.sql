/*
  Warnings:

  - You are about to drop the column `contact` on the `faculties` table. All the data in the column will be lost.
  - Changed the type of `year` on the `academic_semesters` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `contactNo` to the `faculties` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "academic_semesters" DROP COLUMN "year",
ADD COLUMN     "year" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "faculties" DROP COLUMN "contact",
ADD COLUMN     "contactNo" TEXT NOT NULL;
