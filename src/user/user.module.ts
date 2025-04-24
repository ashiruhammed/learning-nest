import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserController } from './user.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Register the User entity with TypeORM
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
