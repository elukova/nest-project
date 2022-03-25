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
import { AppService } from './app.service';
import { News } from './dto/news.dto';

@Controller('news')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-all')
  async getNews(): Promise<News[]> {
    return this.appService.getNews();
  }

  @Put('create')
  async createNews(@Body() body: News): Promise<News[]> {
    return this.appService.createNews(body);
  }

  @Get('get-one')
  async getAPieceOfNews(@Query() query: { id: number }): Promise<News> {
    return this.appService.getAPieceOfNews(query.id);
  }

  @Post('update')
  @HttpCode(200)
  async updateNews(
    @Query() query: { id: number },
    @Body() body: News,
  ): Promise<News[]> {
    return this.appService.updateNews(query.id, body);
  }
}
