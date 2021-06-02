import Prisma from '@prisma/client';

const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

export default async (ctx) => {
  const urlId = Number.parseInt(ctx.params.id, 2);
  const [product] = await prisma.product.findMany({
    where: {
      id: urlId,
    },
  });
  ctx.body = product;
};
