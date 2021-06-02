/*
  Warnings:

  - A unique constraint covering the columns `[barcode,title]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title,parentId]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "barcode" ON "Product"("barcode", "title");

-- CreateIndex
CREATE UNIQUE INDEX "title" ON "Category"("title", "parentId");
