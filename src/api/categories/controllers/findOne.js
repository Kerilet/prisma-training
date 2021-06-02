import prisma from '../../../core/prismaConfig.js';

export default async (ctx) => {
  const urlId = Number.parseInt(ctx.params.id, 0);
  const [category] = await prisma.category.findMany({
    where: {
      id: urlId,
    },
  });
  ctx.body = category;
};
