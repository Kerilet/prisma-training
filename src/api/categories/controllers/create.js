import { promisify } from 'util';
import { v4 as uuidv4 } from 'uuid';
import cloudinary from '../../../config/cloudinary.js';
import prisma from '../../../core/prismaConfig.js';

const cloudUpload = promisify(cloudinary.v2.uploader.upload);

const upload = async (file) => {
  const uploaded = await cloudUpload(file.path, { public_id: `categories/${uuidv4()}` });
  return uploaded.secure_url;
};

export default async (ctx) => {
  const { files } = ctx.request;
  if (files) {
    const { photo } = files;
    if (photo) {
      const uploaded = await upload(photo);
      const categories = await prisma.category.create({
        data: {
          title: ctx.request.body.title,
          published: ctx.request.body.published,
          photoURL: uploaded,
        },
      });
      ctx.body = categories;
    } else {
      throw new Error('"photo" must be a valid image!');
    }
  } else {
    throw new Error('"photo" must not be empty!');
  }
};
