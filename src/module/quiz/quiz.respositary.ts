
import { EntityRepository, Repository } from 'typeorm';
import { Quiz } from './quiz.entity';

@EntityRepository(Quiz)
export class QuizRepositary extends Repository<Quiz> {}