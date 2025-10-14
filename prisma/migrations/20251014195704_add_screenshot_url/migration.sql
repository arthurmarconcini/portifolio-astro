/*
  Warnings:

  - A unique constraint covering the columns `[github_url]` on the table `Project` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "screenshot_url" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Project_github_url_key" ON "Project"("github_url");
