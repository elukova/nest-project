import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Comments } from '../../dto/comments.dto';
import { NewsService } from '../news/news.service';

@Injectable()
export class CommentsService {
  constructor(private readonly newsService: NewsService) {}

  async getComments(newsId: number): Promise<Comments[]> {
    const news = await this.newsService.getNews();
    return news[newsId].comments;
  }

  async getOneComment(
    newsId: number,
    commentId: number,
  ): Promise<Comments | undefined> {
    const news = await this.newsService.getNews();
    const comments = news[newsId].comments;
    return comments[commentId];
  }

  async createComment(newsId: number, data: Comments): Promise<Comments> {
    const news = await this.newsService.getNews();
    news[newsId].comments.push(data);
    return data;
  }

  async updateComment(newsId: number, data: Comments): Promise<Comments> {
    const news = await this.newsService.getNews();
    const comments = news[newsId].comments;
    let updatingComment = comments[data.id];
    if (updatingComment) {
      updatingComment = {
        ...updatingComment,
        ...data,
        id: data.id + 1,
      };
      comments[data.id] = updatingComment;
    } else {
      throw new InternalServerErrorException();
    }
    return comments[data.id];
  }

  async deleteOneComment(
    newsId: number,
    commentId: number,
  ): Promise<Comments[]> {
    const news = await this.newsService.getNews();
    const comments = news[newsId - 1].comments;
    if (comments[commentId - 1]) {
      comments.splice(commentId - 1, 1);
      return comments;
    } else {
      throw new Error('Comment not found');
    }
  }
}
