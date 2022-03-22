import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Query,
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
  async createNews(@Body() data: News): Promise<News[]> {
    return this.appService.createNews(data);
  }

  @Get('get-one')
  async getAPieceOfNews(@Query() data: { id: number }): Promise<News> {
    return this.appService.getAPieceOfNews(data.id);
  }
}
