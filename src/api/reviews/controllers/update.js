import prisma from '../../../core/prismaConfig.js';

export default async (ctx) => {
  const id = Number.parseInt(ctx.params.id, 0);
  const review = await prisma.review.update({
    where: { id },
    data: ctx.request.body,
  });
  ctx.body = review;
};
