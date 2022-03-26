import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateFeedbackDto } from 'src/feedbacks/dtos/CreateFeedback.dto';
import { FeedbacksService } from 'src/feedbacks/services/feedbacks/feedbacks.service';

@Controller('feedbacks')
export class FeedbacksController {

    constructor(private feedbacksService: FeedbacksService) {}

    @Get(':id')
    getFeedbackById(@Param('id', ParseIntPipe) id: number) {

        const result = this.feedbacksService.findFeedbackById(id);
        
        if(result) return result;
        else throw new HttpException('Feedback not found!', HttpStatus.BAD_REQUEST);      
    }

    @Get('')
    getAllFeedbacks(){
        const result = this.feedbacksService.getAllFeedbacks();

        if(result) return result;
        else throw new HttpException('There is no data!', HttpStatus.NO_CONTENT);
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createFeedback(@Body() createFeedbackDto: CreateFeedbackDto) {
        return this.feedbacksService.createFeedback(createFeedbackDto);
    }
}
