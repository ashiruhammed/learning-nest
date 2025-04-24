import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { serialize } from 'src/interceptors/serialize.interceptor';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Controller('/auth')
@serialize(UserDto)
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    const { email, password } = body;
    return this.authService.signUp(email, password);
  }

  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.userService.findOne(parseInt(id));
  }

  @Get()
  findUserByEmail(@Query('email') email: string) {
    return this.userService.find(email);
  }
}
