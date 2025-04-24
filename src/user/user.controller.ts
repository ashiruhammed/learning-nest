import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('/auth')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    const { email, password } = body;
    return this.userService.create(email, password);
  }

  @Post('/:id')
  updateUser(@Param('id') id: number, @Body() body: Partial<CreateUserDto>) {
    return this.userService.update(id, body);
  }
}
