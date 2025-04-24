import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

export class UserInterceptor implements NestInterceptor {
  constructor(private userService: UserService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { userId } = request.session || {};
    if (userId) {
      request.user = this.userService.findOne(userId);
    }

    return next.handle();
  }
}
