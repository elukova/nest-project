import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { News } from '../../dto/news.dto';

const news: News[] = [
  {
    id: 1,
    name: 'fitst',
    description: 'first',
    text: 'first',
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    comments: [
      {
        id: 1,
        text: 'comment',
        createdAt: new Date(Date.now()),
      },
      {
        id: 2,
        text: 'second comment',
        createdAt: new Date(Date.now()),
      },
    ],
  },
];

@Injectable()
export class NewsService {
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

  async updateNews(newsId: number, data: News): Promise<News[]> {
    let updatingNews = news[newsId - 1];
    if (updatingNews) {
      updatingNews = {
        ...updatingNews,
        ...data,
      };
      news[newsId - 1] = updatingNews;
      return news;
    } else {
      throw new InternalServerErrorException();
    }
  }

  async deleteAPieceOfNews(newsId: number): Promise<News[]> {
    if (news[newsId - 1]) {
      news.splice(newsId - 1, 1);
      return news;
    } else {
      throw new Error('A piece of news not found');
    }
  }
}
