import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface Blogcontent extends Document {
  readonly _id: mongoose.Schema.Types.ObjectId;
  readonly author: string;
  readonly content: string;
  readonly publicationDate: Date;
  readonly updatedAt: Date;
  readonly category: string;
  readonly keywords: [string];
  readonly coverImage: string;
  readonly tags: [string];
  readonly language: string;
}
