import { Injectable } from '@nestjs/common';
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
    return await this.blogcontentRepository.findAllBlogContents();
  }

  findOne(id: number) {
    return `This action returns a #${id} blogcontent`;
  }

  update(id: number, updateBlogcontentDto: UpdateBlogcontentDto) {
    return `This action updates a #${id} blogcontent`;
  }

  remove(id: number) {
    return `This action removes a #${id} blogcontent`;
  }
}
