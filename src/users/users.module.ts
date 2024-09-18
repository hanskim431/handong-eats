import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from './users';

@Module({
  controllers: [UsersController],
  providers: [UsersService, Users],
})
export class UsersModule {}
