import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { Feedback } from './typeorm/Feedback';

@Module({
  imports: [FeedbacksModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'sql6.freesqldatabase.com',
    port: 3306,
    username: 'sql6481799',
    password: 'HhFdD4sjEW',
    database: 'sql6481799',
    entities: [Feedback],
    synchronize: true
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
