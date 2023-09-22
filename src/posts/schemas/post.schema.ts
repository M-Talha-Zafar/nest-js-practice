import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  title: {
    type: 'string',
    required: true,
  },
  body: {
    type: 'string',
    required: true,
  },
});
