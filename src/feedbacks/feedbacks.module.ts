import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from 'src/typeorm/Feedback';
import { FeedbacksController } from './controllers/feedbacks/feedbacks.controller';
import { FeedbacksService } from './services/feedbacks/feedbacks.service';

@Module({
  imports: [ TypeOrmModule.forFeature([Feedback])],
  controllers: [FeedbacksController],
  providers: [FeedbacksService]
})
export class FeedbacksModule {}
