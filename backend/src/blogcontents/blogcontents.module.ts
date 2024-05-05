import { Module } from '@nestjs/common';
import { BlogcontentsService } from './blogcontents.service';
import { BlogcontentsController } from './blogcontents.controller';

@Module({
  controllers: [BlogcontentsController],
  providers: [BlogcontentsService],
})
export class BlogcontentsModule {}
