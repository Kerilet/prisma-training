import prisma from '../../../core/prismaConfig.js';

export default async (ctx) => {
  const id = Number.parseInt(ctx.params.id, 0);
  const photo = await prisma.photo.update({
    where: { id },
    data: ctx.request.body,
  });
  ctx.body = photo;
};
