import Prisma from '@prisma/client';

const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

export default async (ctx) => {
  const products = await prisma.product.findMany();
  ctx.body = products;
};
