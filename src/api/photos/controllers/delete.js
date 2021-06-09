import { promisify } from 'util';
import cloudinary from '../../../config/cloudinary.js';
import prisma from '../../../core/prismaConfig.js';

const cloudDelete = promisify(cloudinary.v2.uploader.destroy);

export default async (ctx) => {
  const id = Number.parseInt(ctx.params.id, 0);
  await prisma.photo.delete({
    where: { id },
  });
  await cloudDelete('products/1/wallpaper_diu_jojo.jpg.jpg');
  ctx.status = 204;
  ctx.body = '';
};
