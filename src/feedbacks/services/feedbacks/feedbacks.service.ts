import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFeedbackDto } from 'src/feedbacks/dtos/CreateFeedback.dto';
import { Feedback as FeedbackEntity } from 'src/typeorm/Feedback';
import { Repository } from 'typeorm';

@Injectable()
export class FeedbacksService {

    constructor(@InjectRepository(FeedbackEntity) private readonly feedbackRepository: Repository<FeedbackEntity>) {}

    findFeedbackById(id: number) {
        return this.feedbackRepository.findOne({id: id});
    }

    createFeedback(createFeedbackDto: CreateFeedbackDto){
        const newFeedback = this.feedbackRepository.create(createFeedbackDto);
        return this.feedbackRepository.save(newFeedback);
    }

    getAllFeedbacks() {
        return this.feedbackRepository.find();
    }
}
