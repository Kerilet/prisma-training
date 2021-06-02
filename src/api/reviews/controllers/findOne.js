import prisma from '../../../core/prismaConfig.js';

export default async (ctx) => {
  const urlId = Number.parseInt(ctx.params.id, 0);
  const [review] = await prisma.review.findMany({
    where: {
      id: urlId,
    },
  });
  ctx.body = review;
};
