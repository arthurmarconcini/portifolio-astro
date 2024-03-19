-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "github_url" TEXT NOT NULL,
    "url" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
