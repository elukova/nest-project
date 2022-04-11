import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Query,
  HttpCode,
} from '@nestjs/common';
import { NewsService } from '../modules/news/news.service';
import { News } from '../dto/news.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get('get-all')
  async getNews(): Promise<News[]> {
    return this.newsService.getNews();
  }

  @Post('create')
  async createNews(@Body() body: News): Promise<News[]> {
    return this.newsService.createNews(body);
  }

  @Get('get-one')
  async getAPieceOfNews(@Query() query: { id: number }): Promise<News> {
    return this.newsService.getAPieceOfNews(query.id);
  }

  @Post('update')
  @HttpCode(200)
  async updateNews(
    @Query() query: { newsId: number },
    @Body() body: News,
  ): Promise<News[]> {
    return this.newsService.updateNews(query.newsId, body);
  }

  @Delete('delete')
  async deleteAPieceOfNews(
    @Query() query: { newsId: number },
  ): Promise<News[]> {
    return this.newsService.deleteAPieceOfNews(query.newsId);
  }
}
