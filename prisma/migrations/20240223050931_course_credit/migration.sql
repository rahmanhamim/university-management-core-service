/*
  Warnings:

  - Added the required column `credits` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "credits" INTEGER NOT NULL;
