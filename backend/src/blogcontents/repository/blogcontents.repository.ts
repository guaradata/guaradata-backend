import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blogcontent } from '../interfaces/blogcontents.interface';
import { CreateBlogcontentDto } from '../dto/create-blogcontent.dto';

@Injectable()
export class BlogcontentRepository {
  constructor(
    @InjectModel('blogcontent')
    private readonly blogContentModel: Model<Blogcontent>,
  ) {}

  async createBlogContent(
    newBlogContent: CreateBlogcontentDto,
  ): Promise<Blogcontent> {
    const blogContentCreated =
      await this.blogContentModel.create(newBlogContent);
    return blogContentCreated;
  }

  async findAllBlogContents(): Promise<Blogcontent[]> {
    return await this.blogContentModel
      .find({}, { __v: false })
      .sort({ title: +1 })
      .exec();
  }
}
