import prisma from '../../../core/prismaConfig.js';

export default async (ctx) => {
  const urlId = Number.parseInt(ctx.params.id, 0);
  const [product] = await prisma.product.findMany({
    where: {
      id: urlId,
    },
  });
  ctx.body = product;
};
