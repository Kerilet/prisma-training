import prisma from '../../../core/prismaConfig.js';

export default async (ctx) => {
  const urlId = Number.parseInt(ctx.params.id, 0);
  const [photo] = await prisma.photo.findMany({
    where: {
      id: urlId,
    },
  });
  ctx.body = photo;
};
