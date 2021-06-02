import prisma from '../../../core/prismaConfig.js';

export default async (ctx) => {
  const reviews = await prisma.review.findMany();
  ctx.body = reviews;
};
