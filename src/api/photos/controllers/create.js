import prisma from '../../../core/prismaConfig.js';

export default async (ctx) => {
  const photos = await prisma.photo.create({
    data: ctx.request.body,
  });
  ctx.body = photos;
};
