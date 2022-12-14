import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller("notifications")
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }
  
  @Post()
 async create(@Body() body:CreateNotificationBody) {
  const { recipientId, content, category} = body;
  await this.prisma.notification.create({
    data:{
      //Criado pelo metodo ramdomUUID, importado do node:crypto
      id: randomUUID(),
      content:'Você tem uma nova solicitação de amizade.',
      category: 'social',
      recipientId: randomUUID(),
    },
  });
  }  
}
