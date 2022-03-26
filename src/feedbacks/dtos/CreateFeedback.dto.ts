import { IsEmail, IsNotEmpty, IsNumberString } from "class-validator";

export class CreateFeedbackDto {
    @IsNumberString()
    id: number;
    @IsNotEmpty()
    name: string;
    @IsEmail()
    email: string;
    @IsNotEmpty()
    message: string;
}