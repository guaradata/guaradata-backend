import { Injectable } from '@nestjs/common';
import { CreateBlogcontentDto } from './dto/create-blogcontent.dto';
import { UpdateBlogcontentDto } from './dto/update-blogcontent.dto';

@Injectable()
export class BlogcontentsService {
  create(createBlogcontentDto: CreateBlogcontentDto) {
    return createBlogcontentDto;
  }

  findAll() {
    return `This action returns all blogcontents`;
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
