import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { BlogcontentsModule } from './blogcontents/blogcontents.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BlogcontentsModule,
    // MongooseModule.forRoot(process.env.DATABASE_URI),
    MongooseModule.forRoot('mongodb://guaradata-admin:123456@localhost:27017/'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
