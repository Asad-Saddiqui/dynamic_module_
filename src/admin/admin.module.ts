import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { DbModule } from 'src/db/database.module';

@Module({
  imports: [DbModule.register('mongodb://127.0.0.1:27017/admin')],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
