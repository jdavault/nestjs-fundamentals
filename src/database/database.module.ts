import { DataSource, DataSourceOptions } from 'typeorm';
import { DynamicModule, Module } from '@nestjs/common';

@Module({})
// @Module({
//   providers: [
//     {
//       provide: 'CONNECTION',
//       useValue: new DataSource({
//         type: 'postgres',
//         host: 'localhost',
//         database: 'postgresdb',
//         username: 'postgres',
//         password: 'postgres',
//       }).initialize(),
//     },
//   ],
// })
export class DatabaseModule {
  static init(options: DataSourceOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'CONNECTION',
          useValue: new DataSource(options).initialize(),
        },
      ],
    };
  }
}

// Options
//{
//   type: 'postgres',
//   host: options.host,
//   port: options.port,
//   database: options.database,
//   username: options.username,
//   password: options.password,
// }
