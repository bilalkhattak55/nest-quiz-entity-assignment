
import {TypeOrmModuleOptions} from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '03142683nimm',
    database: 'bilalkhattak',
    entities: [__dirname + '/entities/*.entity{.ts,.js}' ],
    synchronize: true,
  }