import prisma from '../../../core/prismaConfig.js';

export default async (ctx) => {
  const reviews = await prisma.review.create({
    data: ctx.request.body,
  });
  ctx.body = reviews;
};
