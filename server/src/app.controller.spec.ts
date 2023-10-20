import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
<<<<<<< HEAD
    it('placeholder test', () => {
      // The test runner says, "Your test suite must contain at least one test."
=======
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
>>>>>>> 8956c02 (Summary: install nestjs, deleted test server.js)
    });
  });
});
