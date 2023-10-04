import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors:true});

  app.useGlobalPipes(new ValidationPipe({forbidUnknownValues: false}));

  //Opções para configuração do Swagger
  const options = new DocumentBuilder()
    .setTitle('API docs') // Titulo que vai aparece na doc
    .setVersion('1.0') //versão
    .build();
  const document = SwaggerModule.createDocument(app, options); //cria a chamada para gerar a documentação
  SwaggerModule.setup('docs', app, document); // aqui definimos "docs" como o endereço que acessaremos o swagger

  await app.listen(6010);
}
bootstrap();
