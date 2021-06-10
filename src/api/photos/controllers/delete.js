import { promisify } from 'util';
import cloudinary from '../../../config/cloudinary.js';
import prisma from '../../../core/prismaConfig.js';

const cloudDelete = promisify(cloudinary.v2.uploader.destroy);

const removePhotoUrl = async (photo) => {
  const [, after] = photo.url.split('/products');
  const noExt = after.replace(/\.[^/.]+$/, '');
  const publicId = `products${noExt}`;
  const deleted = await cloudDelete(publicId);
  if (deleted.result !== 'ok') console.error(`Image ${publicId} cannot be deleted`);
  return deleted;
};

export default async (ctx) => {
  const id = Number.parseInt(ctx.params.id, 0);
  const photo = await prisma.photo.findUnique({ where: { id } });
  await removePhotoUrl(photo);
  await prisma.photo.delete({
    where: { id },
  });
  ctx.status = 204;
  ctx.body = '';
};
