import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BlogcontentsService } from './blogcontents.service';
import { CreateBlogcontentDto } from './dto/create-blogcontent.dto';
import { UpdateBlogcontentDto } from './dto/update-blogcontent.dto';
import { Blogcontent } from './entities/blogcontent.entity';

@Controller('blogcontents')
export class BlogcontentsController {
  constructor(private readonly blogcontentsService: BlogcontentsService) {}

  @Post()
  async create(
    @Body() createBlogcontentDto: CreateBlogcontentDto,
  ): Promise<Blogcontent> {
    return await this.blogcontentsService.create(createBlogcontentDto);
  }

  @Get()
  async findAll(): Promise<Blogcontent[]> {
    return await this.blogcontentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Blogcontent> {
    return await this.blogcontentsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBlogcontentDto: UpdateBlogcontentDto,
  ) {
    return await this.blogcontentsService.update(id, updateBlogcontentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.blogcontentsService.removeById(id);
  }
}
