import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { Feedback } from './typeorm/Feedback';

@Module({
  imports: [FeedbacksModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'askabek2003',
    database: 'zenbit_db',
    entities: [Feedback],
    synchronize: true
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
