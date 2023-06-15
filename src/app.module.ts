import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { typeOrmConfig } from './config/typeorm.config';
import { QuizModule } from './module/quiz/quiz.module';
import { Quiz } from './module/quiz/quiz.entity';
import { QuizRepositary } from './module/quiz/quiz.respositary';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '03142683nimm',
      database: 'bilalkhattak',
      entities: [Quiz, QuizRepositary],
      synchronize: true,
    }),
    QuizModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
