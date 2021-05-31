/* eslint-disable no-console */
import Prisma from '@prisma/client';

const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

export default async (ctx) => {
  const photos = await prisma.category.findMany({
    where: {
      id: `${ctx.params.id}`,
    },
  });
  ctx.body = photos;
};
