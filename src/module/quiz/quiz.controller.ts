import { Controller, Get, Body, Post, HttpCode, ValidationPipe, UsePipes } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { createQuizDto } from './dto/createQuiz.dto';

@Controller('quiz')
export class QuizController {
     constructor(private readonly quizService: QuizService){}

    @Get('/')
    getAllQuiz():number[] {
        return this.getAllQuiz()
    }


    @Post('create')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizData: createQuizDto) {
        //   return {data: quizData}
        return await this.quizService.createNewQuiz(quizData)
    }

}
