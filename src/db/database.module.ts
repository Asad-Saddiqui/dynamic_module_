// user.module.ts

import { DynamicModule, Module } from '@nestjs/common';
import { connectToDatabase } from './database';

@Module({})
export class DbModule {
  static register(uri): DynamicModule {
    return {
      module: DbModule,
      providers: [
        {
          provide: 'DATABASE_CONNECTION',
          useFactory: () => connectToDatabase(uri),
        },
      ],
      exports: ['DATABASE_CONNECTION'],
    };
  }
}
