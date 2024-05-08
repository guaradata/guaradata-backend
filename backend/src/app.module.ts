import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { BlogcontentsModule } from './blogcontents/blogcontents.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  imports: [
    ConfigModule.forRoot(),
    // MongooseModule.forRoot(process.env.DATABASE_URI),
    MongooseModule.forRoot('mongodb://guaradata-admin:123456@localhost:27017'),
    BlogcontentsModule,
    PrismaModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
})
export class AppModule {}
