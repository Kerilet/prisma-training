import Prisma from '@prisma/client';

const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

export default async (ctx) => {
  const products = await prisma.product.create({
    data: {
      title: 'XBOX',
      published: false,
      parentId: null,
    },
  });
  ctx.body = products;
};
