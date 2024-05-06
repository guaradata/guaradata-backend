import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBlogcontentDto } from './dto/create-blogcontent.dto';
import { UpdateBlogcontentDto } from './dto/update-blogcontent.dto';
import { BlogcontentRepository } from './repository/blogcontents.repository';
import { Blogcontent } from './interfaces/blogcontents.interface';

@Injectable()
export class BlogcontentsService {
  constructor(private readonly blogcontentRepository: BlogcontentRepository) {}
  async create(
    createBlogcontentDto: CreateBlogcontentDto,
  ): Promise<Blogcontent> {
    return await this.blogcontentRepository.createBlogContent(
      createBlogcontentDto,
    );
  }

  async findAll(): Promise<Blogcontent[]> {
    const allBlogContents =
      await this.blogcontentRepository.findAllBlogContents();
    if (!allBlogContents.length) {
      throw new BadRequestException('There is no blog content available');
    }
    return allBlogContents;
  }

  async findOne(id: string) {
    try {
      const blogContent =
        await this.blogcontentRepository.findOneBlogContent(id);
      if (!blogContent) throw new BadRequestException('There are no results');
      return blogContent;
    } catch (error) {
      throw new BadRequestException('There are no results');
    }
  }

  update(id: number, updateBlogcontentDto: UpdateBlogcontentDto) {
    return `This action updates a #${id} blogcontent`;
  }

  async removeById(id: string) {
    try {
      return await this.blogcontentRepository.deleteBlogContentById(id);
    } catch (error) {
      throw new BadRequestException('This Blog Content does not exists');
    }
  }
}
