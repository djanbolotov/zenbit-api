import { IsEmail, IsNotEmpty, IsNumberString } from "class-validator";

export class CreateFeedbackDto {
    @IsNotEmpty()
    name: string;
    @IsEmail()
    email: string;
    @IsNotEmpty()
    message: string;
}
