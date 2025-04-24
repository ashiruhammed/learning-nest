import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserController } from './user.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Register the User entity with TypeORM
  ],
  controllers: [UserController],
  providers: [UserService, AuthService],
})
export class UserModule {}
