/*
  Warnings:

  - The values [PLANNED,ONGOING,COMPLETED] on the enum `ActivityStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ActivityStatus_new" AS ENUM ('ACTIVE', 'INACTIVE', 'CANCELLED');
ALTER TABLE "Activity" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Activity" ALTER COLUMN "status" TYPE "ActivityStatus_new" USING ("status"::text::"ActivityStatus_new");
ALTER TYPE "ActivityStatus" RENAME TO "ActivityStatus_old";
ALTER TYPE "ActivityStatus_new" RENAME TO "ActivityStatus";
DROP TYPE "ActivityStatus_old";
ALTER TABLE "Activity" ALTER COLUMN "status" SET DEFAULT 'INACTIVE';
COMMIT;

-- AlterTable
ALTER TABLE "Activity" ALTER COLUMN "status" SET DEFAULT 'INACTIVE';
