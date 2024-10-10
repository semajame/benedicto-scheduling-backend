// import {
//   Injectable,
//   NotFoundException,
//   ConflictException,
// } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Not, Repository } from 'typeorm';
// import { HttpService } from '@nestjs/axios';

// import { CreateTeacherDto } from './dto/create-teacher.dto';
// import { UpdateTeacherDto } from './dto/update-teacher.dto';

// import { TeacherSchedule } from './entities/teacher_subjects.entity';
// import { Teacher } from './entities/teacher.entity';
// import { CcsScheduleEntitiy } from 'src/typeorm';

// @Injectable()
// export class TeacherService {
//   constructor(
//     @InjectRepository(TeacherSchedule)
//     private teacherScheduleRepository: Repository<TeacherSchedule>,

//     @InjectRepository(CcsScheduleEntitiy)
//     private ccsScheduleEntity: Repository<CcsScheduleEntitiy>,

//     @InjectRepository(Teacher)
//     private teacherRepository: Repository<Teacher>,

//     private readonly httpService: HttpService,
//   ) {}

//   async getTeacherScheduleById(id: number): Promise<TeacherSchedule> {
//     const schedule = await this.teacherScheduleRepository.findOne({
//       where: { id },
//       relations: ['teacher'],
//     });
//     if (!schedule) {
//       throw new NotFoundException(`Schedule with ID ${id} not found`);
//     }
//     return schedule;
//   }

//   async getAllSchedules(): Promise<TeacherSchedule[]> {
//     return this.teacherScheduleRepository.find({ relations: ['teacher'] });
//   }

//   async findAll(): Promise<any[]> {
//     // Adjust the return type if needed
//     const url = process.env.EXTERNAL_ENDPOINT;

//     try {
//       const response = await this.httpService.get(url).toPromise(); // Await the HTTP request
//       return response.data; // Assuming the response data is an array of teachers
//     } catch (err) {
//       // Hide Auth Details
//       if (err.config) {
//         err.config.auth = undefined;
//       }
//     }
//   }

//   async findOne(id: number): Promise<Teacher> {
//     const teacher = await this.teacherRepository.findOneBy({ id });
//     if (!teacher) {
//       throw new NotFoundException('Teacher not found');
//     }
//     return teacher;
//   }

//   async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
//     const existingTeacher = await this.teacherRepository.findOneBy({
//       firstName: createTeacherDto.firstName,
//       lastName: createTeacherDto.lastName,
//     });

//     if (existingTeacher) {
//       throw new ConflictException('Teacher already exists');
//     }

//     const newTeacher = this.teacherRepository.create({
//       ...createTeacherDto,
//     });
//     return this.teacherRepository.save(newTeacher);
//   }

//   async update(
//     id: number,
//     updateTeacherDto: UpdateTeacherDto,
//   ): Promise<Teacher> {
//     // Find the teacher by ID
//     const teacher = await this.teacherRepository.findOneBy({ id });
//     if (!teacher) {
//       throw new NotFoundException('Teacher not found');
//     }

//     // Check for conflict with other teachers (excluding the current teacher)
//     const existingTeacher = await this.teacherRepository.findOneBy({
//       firstName: updateTeacherDto.firstName,
//       lastName: updateTeacherDto.lastName,
//       id: Not(id), // Ensure this teacher's ID is excluded from the check
//     });

//     if (existingTeacher) {
//       throw new ConflictException(
//         'Another teacher with the same name already exists',
//       );
//     }

//     // Apply the updates to the teacher object
//     Object.assign(teacher, updateTeacherDto);

//     // Save the updated teacher
//     return this.teacherRepository.save(teacher);
//   }

//   async remove(id: number): Promise<void> {
//     const teacher = await this.teacherRepository.findOneBy({ id });
//     if (!teacher) {
//       throw new NotFoundException('Teacher not found');
//     }
//     await this.teacherRepository.remove(teacher);
//   }

//   async getTeacherSchedulesByTeacherId(
//     employee_id: number,
//   ): Promise<TeacherSchedule[]> {
//     return this.teacherScheduleRepository.find({
//       // where: { employee_id },
//       relations: ['teacher'],
//     });
//   }

//   async transferAllSchedules(): Promise<void> {
//     const allSchedules = await this.ccsScheduleEntity.find({
//       where: { transferred: false }, // Only get schedules that haven't been transferred
//     });

//     for (const schedule of allSchedules) {
//       // Find the teacher by name
//       const teacher = await this.teacherRepository.findOne({
//         where: {
//           firstName: schedule.teacher.split(' ')[0],
//           lastName: schedule.teacher.split(' ')[1],
//         }, // Assumes the name is in "First Last" format
//       });

//       if (!teacher) {
//         console.warn(
//           `Teacher not found for schedule with subject code ${schedule.subject_code}`,
//         );
//         Error; // Skip this schedule if the teacher is not found
//       }

//       const teacherSchedule = new TeacherSchedule();
//       // teacherSchedule.teacher = teacher; // Assuming teacher is a Teacher entity
//       teacherSchedule.subject_code = schedule.subject_code;
//       teacherSchedule.subject = schedule.subject;
//       teacherSchedule.units = schedule.units;
//       teacherSchedule.room = schedule.room;
//       teacherSchedule.start = schedule.start;
//       teacherSchedule.end = schedule.end;
//       teacherSchedule.day = schedule.day;

//       try {
//         await this.teacherScheduleRepository.save(teacherSchedule);
//         schedule.transferred = true;
//         await this.ccsScheduleEntity.save(schedule);
//       } catch (error) {
//         console.error('Error saving teacher schedule:', error);
//       }
//     }
//   }
// }
