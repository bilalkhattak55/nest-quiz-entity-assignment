import { IsNotEmpty, Length } from "class-validator";

export class createQuizDto {

    @IsNotEmpty({message: "the quiz should have title"})
    @Length(3, 255)
    title: string;


    @IsNotEmpty()
    @Length(3)
    description: string;
}