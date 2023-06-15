import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { QuizRepositary } from './quiz.respositary';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  providers: [QuizService],
  imports:[TypeOrmModule.forFeature([QuizRepositary])],
  controllers: [QuizController],
})
export class QuizModule {}
