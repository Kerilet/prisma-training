import prisma from '../../../core/prismaConfig.js';

export default async (ctx) => {
  const id = Number.parseInt(ctx.params.id, 0);
  const product = await prisma.product.update({
    where: { id },
    data: ctx.request.body,
  });
  ctx.body = product;
};
