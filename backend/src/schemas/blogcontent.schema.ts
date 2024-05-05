import { Schema } from 'mongoose';
export const BlogContent = new Schema({
  title: String,
  author: String,
  content: String,
  publicationDate: { type: Date, default: Date.now },
  updatedAt: Date,
  category: String,
  keywords: [String],
  coverImage: String,
  tags: [String],
  language: String,
});
