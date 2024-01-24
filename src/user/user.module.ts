import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DbModule } from 'src/db/database.module';

@Module({
  imports: [DbModule.register('mongodb://127.0.0.1:27017/user')],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
