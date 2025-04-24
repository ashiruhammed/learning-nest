import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Session,
} from '@nestjs/common';
import { serialize } from 'src/interceptors/serialize.interceptor';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/user.decorator';

@Controller('/auth')
@serialize(UserDto)
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto, @Session() session: any) {
    const { email, password } = body;

    const user = await this.authService.signUp(email, password);
    console.log(user);
    session.userId = user.id;
    return user;
  }

  @Post('/signin')
  async signIn(@Body() body: CreateUserDto, @Session() session: any) {
    const { email, password } = body;
    const user = await this.authService.signIn(email, password);
    session.userId = user.id;
    return user;
  }

  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.userService.findOne(parseInt(id));
  }

  @Get('whoami')
  whoAmI(@CurrentUser() user: UserDto) {
    console.log(user);
    return user;
  }

  @Get()
  findUserByEmail(@Query('email') email: string) {
    return this.userService.find(email);
  }
}
