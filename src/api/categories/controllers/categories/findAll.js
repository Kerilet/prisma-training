import Prisma from '@prisma/client';

const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

export default async (ctx) => {
  const categories = await prisma.category.findMany();
  ctx.body = categories;
};
