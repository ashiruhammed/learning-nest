import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from './report.entity';

@Module({
  providers: [ReportService],
  imports: [TypeOrmModule.forFeature([Report])],
})
export class ReportModule {}
