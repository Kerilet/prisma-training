import prisma from '../../../core/prismaConfig.js';

export default async (ctx) => {
  const id = Number.parseInt(ctx.params.id, 0);
  await prisma.product.delete({
    where: { id },
  });
  ctx.status = 204;
  ctx.body = '';
};
