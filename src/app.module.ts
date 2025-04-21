import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportModule } from './report/report.module';
import { ReportService } from './report/report.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, ReportModule],
  controllers: [AppController],
  providers: [AppService, ReportService],
})
export class AppModule {}
