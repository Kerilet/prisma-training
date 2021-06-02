import prisma from '../../../core/prismaConfig.js';

export default async (ctx) => {
  const photos = await prisma.photo.findMany();
  ctx.body = photos;
};
