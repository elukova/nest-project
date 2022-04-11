import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Query,
  HttpCode,
} from '@nestjs/common';
import { DecrementId } from '../utils/decorators/decrement-id';
import { Comments } from '../dto/comments.dto';
import { CommentsService } from 'src/modules/comments/comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get('get-all')
  async getComments(
    @Query() @DecrementId(['newsId']) query: { newsId: number },
  ): Promise<Comments[]> {
    return this.commentsService.getComments(query.newsId);
  }

  @Get('get-one')
  async getOneComment(
    @Query()
    @DecrementId(['newsId', 'commentId'])
    query: {
      newsId: number;
      commentId: number;
    },
  ): Promise<Comments> {
    return this.commentsService.getOneComment(query.newsId, query.commentId);
  }

  @Post('create')
  async createComment(
    @Query() @DecrementId(['newsId']) query: { newsId: number },
    @Body() data: Comments,
  ): Promise<Comments> {
    return this.commentsService.createComment(query.newsId, data);
  }

  @Post('update')
  async updateComment(
    @Query() @DecrementId(['newsId']) query: { newsId: number },
    @Body() @DecrementId(['id']) body: Comments,
  ): Promise<Comments> {
    return this.commentsService.updateComment(query.newsId, body);
  }

  @Delete('delete')
  async deleteOneComment(
    @Query() query: { newsId: number; commentId: number },
  ): Promise<Comments[]> {
    return this.commentsService.deleteOneComment(query.newsId, query.commentId);
  }
}
