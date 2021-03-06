import prisma from '../../../core/prismaConfig.js';

export default async (ctx) => {
  const products = await prisma.product.create({
    data: ctx.request.body,
  });
  ctx.body = products;
};