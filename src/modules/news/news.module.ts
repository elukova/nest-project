import { Module } from '@nestjs/common';
import { NewsController } from '../../controllers/news.controller';
import { CommentsModule } from '../comments/comments.module';
import { NewsService } from './news.service';

@Module({
  imports: [],
  controllers: [NewsController],
  providers: [Array, NewsService],
  exports: [NewsService],
})
export class NewsModule {}
