import fs from 'fs';
import { promisify } from 'util';
import path from 'path';
import prisma from '../../../core/prismaConfig.js';

const copy = promisify(fs.copyFile);

const upload = async (file) => {
  await copy(file.path, path.join('./uploads/', file.name));
  return `http://localhost:3000/uploads/${file.name}`;
};

export default async (ctx) => {
  // const photos = await prisma.photo.create({
  //   data: ctx.request.body,
  // });
  // ctx.body = photos;
  const { files } = ctx.request;
  if (files) {
    const { photo } = files;
    if (photo) {
      const uploaded = await upload(photo);
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
