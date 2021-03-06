import { Injectable } from '@nestjs/common';
import { News } from './dto/news.dto';

const news: News[] = [
  {
    id: 1,
    name: 'fitst',
    description: 'first',
    text: 'first',
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
  },
];

@Injectable()
export class AppService {
  async getNews(): Promise<News[]> {
    return news;
  }

  async createNews(data: News): Promise<News[]> {
    news.push(data);
    return news;
  }

  async getAPieceOfNews(id: number): Promise<News> {
    return news[id - 1];
  }
}
