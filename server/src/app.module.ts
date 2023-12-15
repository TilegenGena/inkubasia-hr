import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { dirname, join } from 'path';
import { EmployeeService } from './employee/employee.service';
import { AdminController } from './admin/admin.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../../', 'client/dist/client'),
    })
  ],
  controllers: [AppController, AdminController],
  providers: [AppService, EmployeeService],
})
export class AppModule {}
