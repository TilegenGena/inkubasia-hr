import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

// dirname = /server/dist 
console.log(__dirname);

//  goal = /client/dist/client
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../../', 'client/dist/client'),
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
