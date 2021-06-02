import prisma from '../../../core/prismaConfig.js';

export default async (ctx) => {
  const categories = await prisma.category.findMany();
  ctx.body = categories;
};
