import { Test, TestingModule } from '@nestjs/testing';
import { TeacherController } from './teachers.controller';
import { TeacherService } from './teachers.service';

describe('TeachersController', () => {
  let controller: TeacherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeacherController],
      providers: [TeacherService],
    }).compile();

    controller = module.get<TeacherController>(TeacherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
