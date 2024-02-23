/*
  Warnings:

  - The primary key for the `course_to_prerequisites` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `prerequisiteId` on the `course_to_prerequisites` table. All the data in the column will be lost.
  - Added the required column `preRequisiteId` to the `course_to_prerequisites` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "course_to_prerequisites" DROP CONSTRAINT "course_to_prerequisites_prerequisiteId_fkey";

-- AlterTable
ALTER TABLE "course_to_prerequisites" DROP CONSTRAINT "course_to_prerequisites_pkey",
DROP COLUMN "prerequisiteId",
ADD COLUMN     "preRequisiteId" TEXT NOT NULL,
ADD CONSTRAINT "course_to_prerequisites_pkey" PRIMARY KEY ("courseId", "preRequisiteId");

-- AddForeignKey
ALTER TABLE "course_to_prerequisites" ADD CONSTRAINT "course_to_prerequisites_preRequisiteId_fkey" FOREIGN KEY ("preRequisiteId") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
