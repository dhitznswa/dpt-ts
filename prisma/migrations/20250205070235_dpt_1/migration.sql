/*
  Warnings:

  - You are about to drop the column `name` on the `UserAuth` table. All the data in the column will be lost.
  - Added the required column `fullname` to the `UserAuth` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserAuth" DROP COLUMN "name",
ADD COLUMN     "fullname" TEXT NOT NULL;
