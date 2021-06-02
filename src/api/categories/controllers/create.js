import prisma from '../../../core/prismaConfig.js';

export default async (ctx) => {
  const categories = await prisma.category.create({
    data: ctx.request.body,
  });
  ctx.body = categories;
};
