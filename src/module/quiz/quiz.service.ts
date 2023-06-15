import { Injectable } from '@nestjs/common';
import { QuizRepositary } from './quiz.respositary';
import {InjectRepository} from '@nestjs/typeorm';
import { createQuizDto } from './dto/createQuiz.dto';
@Injectable()
export class QuizService {
    constructor(
        @InjectRepository(QuizRepositary) private quizRepository: QuizRepositary,
    ) {}


    getAllQuiz(): number[] {
        return [1, 2, 3]
    }

    async createNewQuiz(quiz: createQuizDto) {
        return await this.quizRepository.save(quiz)
    }



}