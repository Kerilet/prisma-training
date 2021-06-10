import { promisify } from 'util';
import { v4 as uuidv4 } from 'uuid';
import cloudinary from '../../../config/cloudinary.js';
import prisma from '../../../core/prismaConfig.js';

const cloudUpload = promisify(cloudinary.v2.uploader.upload);

const upload = async (file, id) => {
  const uploaded = await cloudUpload(file.path, { public_id: `products/${id}/${uuidv4()}` });
  return uploaded.secure_url;
};

export default async (ctx) => {
  const { files } = ctx.request;
  if (files) {
    const { photo } = files;
    if (photo) {
      const uploaded = await upload(photo, ctx.params.id);
      const data = await prisma.photo.create({
        data: {
          title: ctx.request.body.title,
          url: uploaded,
          productId: parseInt(ctx.request.body.productId),
        },
      });
      ctx.body = data;
    } else {
      throw new Error('"photo" must be a valid image!');
    }
  } else {
    throw new Error('"photo" must not be empty!');
  }
};
