/*
  Warnings:

  - Made the column `barcode` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "barcode" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "price" REAL NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 1,
    "salePercentage" REAL,
    "weight" REAL,
    "height" REAL,
    "width" REAL,
    "depth" REAL
);
INSERT INTO "new_Product" ("barcode", "depth", "description", "height", "id", "price", "published", "salePercentage", "stock", "title", "weight", "width") SELECT "barcode", "depth", "description", "height", "id", "price", "published", "salePercentage", "stock", "title", "weight", "width" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product.barcode_unique" ON "Product"("barcode");
CREATE UNIQUE INDEX "Product.title_unique" ON "Product"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
