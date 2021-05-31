import Prisma from '@prisma/client';

const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

export default async (ctx) => {
  const categories = await prisma.category.update({
    where: { id: 1 },
    data: { published: true },
  });
  ctx.body = categories;
};
