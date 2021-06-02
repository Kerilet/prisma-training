import prisma from '../../../core/prismaConfig.js';

export default async (ctx) => {
  const products = await prisma.product.findMany();
  ctx.body = products;
};
