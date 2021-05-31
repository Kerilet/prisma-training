import Prisma from '@prisma/client';

const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

export default async (ctx) => {
  await prisma.user.delete({
    where: { id: ctx.params.id },
  });
  ctx.body += 'deleted succesfully';
};
