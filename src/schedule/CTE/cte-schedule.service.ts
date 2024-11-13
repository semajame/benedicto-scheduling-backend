import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFirstDto } from './BSED/dto/create-first.dto';
import { UpdateFirstDto } from './BSED/dto/update-first.dto';

import { InjectRepository } from '@nestjs/typeorm';

import {
  bsedScheduleEntity,
  minorScheduleEntity,
} from './BSED/entities/bsed-schedule.entity';
import { beedScheduleEntity } from './BSELEM/entities/beed-schedule.entity';
import { In, Repository } from 'typeorm';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
// import { Teacher } from 'src/teachers/entities/teacher.entity';

@Injectable()
export class cteService {
  constructor(
    @InjectRepository(bsedScheduleEntity)
    private readonly bsedScheduleRepository: Repository<bsedScheduleEntity>,

    @InjectRepository(minorScheduleEntity)
    private readonly minorScheduleRepository: Repository<minorScheduleEntity>,

    @InjectRepository(beedScheduleEntity)
    private readonly beedScheduleRepository: Repository<beedScheduleEntity>,

    // @InjectRepository(Teacher)
    // private teacherRepository: Repository<Teacher>,

    @InjectRepository(TeacherSchedule)
    private teacherScheduleRepository: Repository<TeacherSchedule>,
  ) {}

  //^ GET TEACHER SCHEDULE BY TEACHER NAME
  async getTeacherSchedulesByTeacherName(
    teacher: string,
  ): Promise<TeacherSchedule[]> {
    return await this.teacherScheduleRepository.find({
      where: { teacher: teacher },
    });
  }

  //^ GET MINOR SUBJECTS IT
  async findMinorSubjectsIT(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'National Service Training Prog. 1',
          'National Service Training Prog. 2',
          'Pre Calculus for Non-STEM',
          'Mathematics in the Modern World',
          'Wellness & Fitness',
          'Purposive Communication',
          'Understanding the Self',
          'Retorika',
          'Panitikan ng Pilipinas',
          'Reading in Philippine History',
          'Self Defense',
          'The Contemporary World',
          'Art Appreciation',
          'Individual/Dual Sports',
          'Team Sports',
          'Fundamentals of Accounting',
          'Science, Technology & Society',
          'Ethics',
          'Marketing Media Gamification',
          "Rizal's Life & Works",
          'Statistics & Probability',
          'Technopreneurship (Lec)',
          'Technopreneurship (Lab)',
        ]),
      },
    });
  }

  async findMinorSubjectsITFirstYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'National Service Training Prog. 1',
          'National Service Training Prog. 2',
          'Pre Calculus for Non-STEM',
          'Mathematics in the Modern World',
          'Wellness & Fitness',
          'Purposive Communication',
          'Understanding the Self',
          'Retorika',
          'Panitikan ng Pilipinas',
          'Reading in Philippine History',
          'Self Defense',
        ]),
      },
    });
  }

  async findMinorSubjectsITSecondYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'The Contemporary World',
          'Art Appreciation',
          'Individual/Dual Sports',
          'Team Sports',
          'Fundamentals of Accounting',
          'Science, Technology & Society',
          'Ethics',
        ]),
      },
    });
  }

  async findMinorSubjectsITThirdYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'Marketing Media Gamification',
          "Rizal's Life & Works",
          'Statistics & Probability',
          'Technopreneurship (Lec)',
          'Technopreneurship (Lab)',
        ]),
      },
    });
  }

  //^ GET MINOR SUBJECTS COE

  //* MECHANICAL ENGINEERING
  async findMinorSubjectsBsme(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'National Service Training Prog. 1',
          'National Service Training Prog. 2',
          'Self Defense',
          'Wellness & Fitness',
          'Mathematics in the Modern World',
          'Purposive Communication',
          'Art Appreciation',
          "Rizal's Life & Works",
          'Understanding the Self',
          'Reading in Philippine History',
          'Individual/Dual Sports',
          'Arts & Humanities',
          'The Contemporary World',
          'Technopreneurship (Lec)',
          'Technopreneurship (Lab)',
          'Ethics',
          'Understanding the Self',
          'Science, Technology & Society',
          'Team Sports',
          'Social Science and Philosophy',
        ]),
      },
    });
  }

  async findMinorSubjectsBsmeFirstYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'National Service Training Prog. 1',
          'National Service Training Prog. 2',
          'Self Defense',
          'Wellness & Fitness',
          'Mathematics in the Modern World',
          'Purposive Communication',
          'Art Appreciation',
          "Rizal's Life & Works",
          'Understanding the Self',
          'Reading in Philippine History',
        ]),
      },
    });
  }

  async findMinorSubjectsBsmeSecondYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'Individual/Dual Sports',
          'Arts & Humanities',
          'The Contemporary World',
          'Technopreneurship (Lec)',
          'Technopreneurship (Lab)',
          'Ethics',
          'Understanding the Self',
          'Science, Technology & Society',
          'Team Sports',
        ]),
      },
    });
  }

  async findMinorSubjectsBsmeThirdYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In(['Social Science and Philosophy']),
      },
    });
  }

  //* CIVIL ENGINEERING

  async findMinorSubjectsBsce(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'National Service Training Prog. 1',
          'National Service Training Prog. 2',
          'Self Defense',
          'Wellness & Fitness',
          'Mathematics in the Modern World',
          'Purposive Communication',
          'Art Appreciation',
          "Rizal's Life & Works",
          'Understanding the Self',
          'Reading in Philippine History',
          'Individual/Dual Sports',
          'Arts & Humanities',
          'The Contemporary World',
          'Technopreneurship (Lec)',
          'Technopreneurship (Lab)',
          'Individual/Dual Sports',
          'Understanding the Self',
          'Social Science and Philosophy',
          'Science, Technology & Society',
          'Ethics',
          'Team Sports',
        ]),
      },
    });
  }

  async findMinorSubjectsBsceFirstYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'National Service Training Prog. 1',
          'National Service Training Prog. 2',
          'Self Defense',
          'Wellness & Fitness',
          'Mathematics in the Modern World',
          'Purposive Communication',
          'Art Appreciation',
          "Rizal's Life & Works",
          'Understanding the Self',
          'Reading in Philippine History',
        ]),
      },
    });
  }

  async findMinorSubjectsBsceSecondYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'Individual/Dual Sports',
          'Arts & Humanities',
          'The Contemporary World',
          'Technopreneurship (Lec)',
          'Technopreneurship (Lab)',
          'Individual/Dual Sports',
          'Understanding the Self',
          'Social Science and Philosophy',
          'Science, Technology & Society',
          'Ethics',
          'Team Sports',
        ]),
      },
    });
  }

  //* ELECTRICAL ENGINEERING

  async findMinorSubjectsBsee(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'National Service Training Prog. 1',
          'National Service Training Prog. 2',
          'Self Defense',
          'Wellness & Fitness',
          'Mathematics in the Modern World',
          'Purposive Communication',
          'Art Appreciation',
          "Rizal's Life & Works",
          'Understanding the Self',
          'Reading in Philippine History',
          'Individual/Dual Sports',
          'Arts & Humanities',
          'The Contemporary World',
          'Technopreneurship (Lec)',
          'Technopreneurship (Lab)',
          'Individual/Dual Sports',
          'Understanding the Self',
          'Social Science and Philosophy',
          'Science, Technology & Society',
          'Ethics',
          'Team Sports',
          'Computer Fund. & Programming 1',
        ]),
      },
    });
  }

  async findMinorSubjectsBseeFirstYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'National Service Training Prog. 1',
          'National Service Training Prog. 2',
          'Self Defense',
          'Wellness & Fitness',
          'Mathematics in the Modern World',
          'Purposive Communication',
          'Art Appreciation',
          "Rizal's Life & Works",
          'Understanding the Self',
          'Reading in Philippine History',
        ]),
      },
    });
  }

  async findMinorSubjectsBseeSecondYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'Individual/Dual Sports',
          'Arts & Humanities',
          'The Contemporary World',
          'Technopreneurship (Lec)',
          'Technopreneurship (Lab)',
          'Individual/Dual Sports',
          'Understanding the Self',
          'Social Science and Philosophy',
          'Science, Technology & Society',
          'Ethics',
          'Team Sports',
          'Computer Fund. & Programming 1',
        ]),
      },
    });
  }

  async findMinorSubjectsBseeThirdYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In(['Social Science and Philosophy']),
      },
    });
  }

  //* INDUSTRIAL ENGINEERING

  async findMinorSubjectsBsie(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'National Service Training Prog. 1',
          'National Service Training Prog. 2',
          'Self Defense',
          'Wellness & Fitness',
          'Mathematics in the Modern World',
          'Purposive Communication',
          'Art Appreciation',
          "Rizal's Life & Works",
          'Understanding the Self',
          'Reading in Philippine History',
          'Individual/Dual Sports',
          'Arts & Humanities',
          'The Contemporary World',
          'Individual/Dual Sports',
          'Social Science and Philosophy',
          'Science, Technology & Society',
          'Ethics',
          'Team Sports',
          'Social Science and Philosophy',
        ]),
      },
    });
  }

  async findMinorSubjectsBsieFirstYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'National Service Training Prog. 1',
          'National Service Training Prog. 2',
          'Self Defense',
          'Wellness & Fitness',
          'Mathematics in the Modern World',
          'Purposive Communication',
          'Art Appreciation',
          "Rizal's Life & Works",
          'Understanding the Self',
          'Reading in Philippine History',
        ]),
      },
    });
  }

  async findMinorSubjectsBsieSecondYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'Individual/Dual Sports',
          'Arts & Humanities',
          'The Contemporary World',
          'Individual/Dual Sports',
          'Social Science and Philosophy',
          'Science, Technology & Society',
          'Ethics',
          'Team Sports',
        ]),
      },
    });
  }

  async findMinorSubjectsBsieThirdYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In(['Social Science and Philosophy']),
      },
    });
  }

  //^ GET MINOR SUBJECTS CBM

  //* ACCOUNTING
  async findMinorSubjectsBsa(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'National Service Training Prog. 1',
          'National Service Training Prog. 2',
          'Self Defense',
          'Wellness & Fitness',
          'The Contemporary World',
          'Retorika',
          'Purposive Communication',
          'Art Appreciation',
          "Rizal's Life & Works",
          'Understanding the Self',
          'Panitikan ng Pilipinas',
          'Reading in Philippine History',
          'Ethics',
          'Science, Technology & Society',
          'Individual/Dual Sports',
          'Mathematics in the Modern World',
          'Team Sports',
          'Arts & Humanities',
          "Rizal's Life & Works",
          'Philippine Literature',
        ]),
      },
    });
  }

  async findMinorSubjectsBsaFirstYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'National Service Training Prog. 1',
          'National Service Training Prog. 2',
          'Self Defense',
          'Wellness & Fitness',
          'The Contemporary World',
          'Retorika',
          'Purposive Communication',
          'Art Appreciation',
          "Rizal's Life & Works",
          'Understanding the Self',
          'Panitikan ng Pilipinas',
          'Reading in Philippine History',
          'Ethics',
          'Science, Technology & Society',
        ]),
      },
    });
  }

  async findMinorSubjectsBsaSecondYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'Individual/Dual Sports',
          'Mathematics in the Modern World',
          'Team Sports',
        ]),
      },
    });
  }

  async findMinorSubjectsBsaThirdYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In(['Arts & Humanities']),
      },
    });
  }

  async findMinorSubjectsBsaFourthYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In(["Rizal's Life & Works", 'Philippine Literature']),
      },
    });
  }

  //* MARKETING MANAGEMENT
  async findMinorSubjectsBsmm(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'National Service Training Prog. 1',
          'National Service Training Prog. 2',
          'Art Appreciation',
          'Wellness & Fitness',
          'Purposive Communication',
          'Understanding the Self',
          'Retorika',
          'Ethics',
          'Readings in Philippine History',
          'Self Defense',
          'Panitikan ng Pilipinas',
          'The Contemporary World',
          'Individual/Dual Sports',
          'Science, Technology & Society',
          'Social Science and Philosophy',
          'Mathematics in the Modern World',
          'Team Sports',
          "Rizal's Life & Works",
          'Arts & Humanities',
        ]),
      },
    });
  }

  async findMinorSubjectsBsmmFirstYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'National Service Training Prog. 1',
          'National Service Training Prog. 2',
          'Art Appreciation',
          'Wellness & Fitness',
          'Purposive Communication',
          'Understanding the Self',
          'Retorika',
          'Ethics',
          'Readings in Philippine History',
          'Self Defense',
          'Panitikan ng Pilipinas',
          'The Contemporary World',
        ]),
      },
    });
  }

  async findMinorSubjectsBsmmSecondYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'Individual/Dual Sports',
          'Science, Technology & Society',
          'Social Science and Philosophy',
          'Mathematics in the Modern World',
          'Team Sports',
        ]),
      },
    });
  }

  async findMinorSubjectsBsmmThirdYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In(["Rizal's Life & Works"]),
      },
    });
  }

  async findMinorSubjectsBsmmFourthYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In(['Arts & Humanities']),
      },
    });
  }

  //* HOSPITALITY MANAGEMENT

  async findMinorSubjectsBshm(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'National Service Training Prog. 1',
          'National Service Training Prog. 2',
          'Self Defense',
          'Wellness & Fitness',
          'Readings in Philippine History',
          'Ethics',
          'Mathematics in the Modern World',
          'Individual/Dual Sports',
          'Team Sports',
          'Purposive Communication',
          'Science, Technology & Society',
          'Retorika',
          'Social Science and Philosophy',
          'Art Appreciation',
          "Rizal's Life & Works",
          'Arts & Humanities',
          'The Contemporary World',
          'Pantikin ng Pilipinas',
        ]),
      },
    });
  }

  async findMinorSubjectsBshmFirstYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'National Service Training Prog. 1',
          'National Service Training Prog. 2',
          'Self Defense',
          'Wellness & Fitness',
          'Readings in Philippine History',
          'Ethics',
          'Mathematics in the Modern World',
        ]),
      },
    });
  }

  async findMinorSubjectsBshmSecondYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'Individual/Dual Sports',
          'Team Sports',
          'Purposive Communication',
          'Science, Technology & Society',
          'Retorika',
          'Social Science and Philosophy',
          'Art Appreciation',
        ]),
      },
    });
  }

  async findMinorSubjectsBshmThirdYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          "Rizal's Life & Works",
          'Arts & Humanities',
          'The Contemporary World',
          'Pantikin ng Pilipinas',
        ]),
      },
    });
  }

  async findMinorSubjectsBshmFourthYear(): Promise<bsedScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In(['Arts & Humanities']),
      },
    });
  }

  //* HUMAN RESOURCE MANAGEMENT

  async findMinorSubjectsBshrm(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'National Service Training Prog. 1',
          'Ethics',
          'Wellness & Fitness',
          'Purposive Communication',
          'Understanding the Self',
          'Retorika',
          'Art Appreciation',
          'Readings in Philippine History',
          'Self Defense',
          'National Service Training Prog. 2',
          'Panitikan ng Pilipinas',
          'Science, Technology & Society',
          'The Contemporary World',
          'Individual/Dual Sports',
          'Mathematics in the Modern World',
          'Social Science and Philosophy',
          'Team Sports',
          'Arts & Humanities',
          'Philippine Literature',
          "Rizal's Life & Works",
        ]),
      },
    });
  }

  async findMinorSubjectsBshrmFirstYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'National Service Training Prog. 1',
          'Ethics',
          'Wellness & Fitness',
          'Purposive Communication',
          'Understanding the Self',
          'Retorika',
          'Art Appreciation',
          'Readings in Philippine History',
          'Self Defense',
          'National Service Training Prog. 2',
          'Panitikan ng Pilipinas',
          'Science, Technology & Society',
          'The Contemporary World',
        ]),
      },
    });
  }

  async findMinorSubjectsBshrmSecondYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In([
          'Individual/Dual Sports',
          'Mathematics in the Modern World',
          'Social Science and Philosophy',
          'Team Sports',
        ]),
      },
    });
  }

  async findMinorSubjectsBshrmThirdYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In(["Rizal's Life & Works"]),
      },
    });
  }

  async findMinorSubjectsBshrmFourthYear(): Promise<minorScheduleEntity[]> {
    return await this.minorScheduleRepository.find({
      where: {
        subject: In(['Arts & Humanities', 'Philippine Literature']),
      },
    });
  }

  //^ GET
  async findAll(): Promise<bsedScheduleEntity[]> {
    return await this.bsedScheduleRepository.find();
  }

  async findAllBeed(): Promise<beedScheduleEntity[]> {
    return await this.beedScheduleRepository.find();
  }

  async findAllMinor(): Promise<minorScheduleEntity[]> {
    const uniqueSubjects = [
      'National Service Training Prog. 1',
      'Ethics',
      'Wellness & Fitness',
      'Purposive Communication',
      'Understanding the Self',
      'Retorika',
      'Art Appreciation',
      'Readings in Philippine History',
      'Self Defense',
      'National Service Training Prog. 2',
      'Panitikan ng Pilipinas',
      'Science, Technology & Society',
      'The Contemporary World',
      'Individual/Dual Sports',
      'Mathematics in the Modern World',
      'Social Science and Philosophy',
      'Team Sports',
      'Arts & Humanities',
      'Philippine Literature',
      "Rizal's Life & Works",
      'Pantikin ng Pilipinas',
      'Reading in Philippine History',
      'Technopreneurship (Lec)',
      'Technopreneurship (Lab)',
      'Computer Fund. & Programming 1',
      'Pre Calculus for Non-STEM',
      'Fundamentals of Accounting',
      'Marketing Media Gamification',
      'Statistics & Probability',
    ];

    return await this.minorScheduleRepository.find({
      where: {
        subject: In(uniqueSubjects),
      },
    });
  }

  async findFirstYear(): Promise<bsedScheduleEntity[]> {
    return await this.bsedScheduleRepository.find({
      where: { year: 1 },
    });
  }

  async findFirstYearBeed(): Promise<beedScheduleEntity[]> {
    return await this.beedScheduleRepository.find({
      where: { year: 1 },
    });
  }

  async findSecondYear(): Promise<bsedScheduleEntity[]> {
    return await this.bsedScheduleRepository.find({
      where: { year: 2 },
    });
  }

  async findSecondYearBeed(): Promise<beedScheduleEntity[]> {
    return await this.beedScheduleRepository.find({
      where: { year: 2 },
    });
  }

  async findThirdYear(): Promise<bsedScheduleEntity[]> {
    return await this.bsedScheduleRepository.find({
      where: { year: 3 },
    });
  }

  async findThirdYearBeed(): Promise<beedScheduleEntity[]> {
    return await this.beedScheduleRepository.find({
      where: { year: 3 },
    });
  }

  async findFourthYear(): Promise<bsedScheduleEntity[]> {
    return await this.bsedScheduleRepository.find({
      where: { year: 4 },
    });
  }

  async findFourthYearBeed(): Promise<beedScheduleEntity[]> {
    return await this.beedScheduleRepository.find({
      where: { year: 4 },
    });
  }

  //^ POST
  async create(createFirstDto: CreateFirstDto): Promise<bsedScheduleEntity> {
    const newSchedule = this.bsedScheduleRepository.create({
      ...createFirstDto,
    });

    const savedSchedule = await this.bsedScheduleRepository.save(newSchedule);

    const newTeacherSchedule = this.teacherScheduleRepository.create({
      subject_id: createFirstDto.subject_id,
      teacher_id: createFirstDto.teacher_id,
      teacher: createFirstDto.teacher, // Use teacher's name from createFirstDto
      subject_code: createFirstDto.subject_code,
      subject: createFirstDto.subject,
      units: createFirstDto.units,
      room: createFirstDto.room,
      start: createFirstDto.start,
      end: createFirstDto.end,
      day: createFirstDto.day,
      semester_id: createFirstDto.semester_id,
      semester: createFirstDto.semester,
      school_year: createFirstDto.school_year,
      recurrencePattern: createFirstDto.recurrencePattern,
      background: createFirstDto.background,
      transferIdBsed: savedSchedule.id, // Link with saved CcsSchedule
    });

    // Save the TeacherSchedule entity
    await this.teacherScheduleRepository.save(newTeacherSchedule);

    return savedSchedule; // Return the newly created CcsSchedule
  }

  async createBeed(
    createFirstDto: CreateFirstDto,
  ): Promise<beedScheduleEntity> {
    const newSchedule = this.beedScheduleRepository.create({
      ...createFirstDto,
    });

    const savedSchedule = await this.beedScheduleRepository.save(newSchedule);

    const newTeacherSchedule = this.teacherScheduleRepository.create({
      subject_id: createFirstDto.subject_id,
      teacher_id: createFirstDto.teacher_id,
      teacher: createFirstDto.teacher, // Use teacher's name from createFirstDto
      subject_code: createFirstDto.subject_code,
      subject: createFirstDto.subject,
      units: createFirstDto.units,
      room: createFirstDto.room,
      start: createFirstDto.start,
      end: createFirstDto.end,
      day: createFirstDto.day,
      semester_id: createFirstDto.semester_id,
      semester: createFirstDto.semester,
      school_year: createFirstDto.school_year,
      recurrencePattern: createFirstDto.recurrencePattern,
      background: createFirstDto.background,
      transferIdBeed: savedSchedule.id, // Link with saved CcsSchedule
    });

    // Save the TeacherSchedule entity
    await this.teacherScheduleRepository.save(newTeacherSchedule);

    return savedSchedule; // Return the newly created CcsSchedule
  }

  async createMinor(
    createFirstDto: CreateFirstDto,
  ): Promise<minorScheduleEntity> {
    try {
      // Create a new minor schedule with explicit field assignments
      const newSchedule = this.minorScheduleRepository.create({
        ...createFirstDto,
      });

      console.log('New minor schedule data:', newSchedule);

      // Save the new schedule to the database
      const savedSchedule = await this.minorScheduleRepository.save(
        newSchedule,
      );

      // Check if the schedule was saved correctly
      if (!savedSchedule || !savedSchedule.id) {
        console.error('Failed to save minor schedule.');
        throw new Error('Failed to save minor schedule.');
      }

      // Create a linked teacher schedule
      const newTeacherSchedule = this.teacherScheduleRepository.create({
        subject_id: createFirstDto.subject_id,
        teacher_id: createFirstDto.teacher_id,
        teacher: createFirstDto.teacher,
        subject_code: createFirstDto.subject_code,
        subject: createFirstDto.subject,
        units: createFirstDto.units,
        room: createFirstDto.room,
        start: createFirstDto.start,
        end: createFirstDto.end,
        day: createFirstDto.day,
        semester: createFirstDto.semester,
        school_year: createFirstDto.school_year,
        recurrencePattern: createFirstDto.recurrencePattern,
        background: createFirstDto.background,
        transferIdMinor: savedSchedule.id, // Link with the saved minor schedule
      });

      // Save the TeacherSchedule entity
      await this.teacherScheduleRepository.save(newTeacherSchedule);

      console.log('Minor schedule and teacher schedule created successfully.');

      return savedSchedule; // Return the newly created minor schedule
    } catch (error) {
      console.error('Error in createMinor:', error);
      throw error;
    }
  }

  //^ PUT
  async update(id: number, updateDto: UpdateFirstDto): Promise<void> {
    // Find the existing First entity along with related TeacherSchedules
    const existingFirst = await this.bsedScheduleRepository.findOne({
      where: { id },
      relations: ['teacherSchedules'], // Ensure we load related TeacherSchedules
    });

    if (!existingFirst) {
      throw new NotFoundException(`First with ID ${id} not found`);
    }

    // Update the existing First entity with the new values
    Object.assign(existingFirst, updateDto);
    await this.bsedScheduleRepository.save(existingFirst);

    if (
      existingFirst.teacherSchedules &&
      existingFirst.teacherSchedules.length > 0
    ) {
      for (const teacherSchedule of existingFirst.teacherSchedules) {
        // Update the related TeacherSchedule fields
        teacherSchedule.subject_id = existingFirst.subject_id;
        teacherSchedule.teacher_id = existingFirst.teacher_id;
        teacherSchedule.teacher = existingFirst.teacher;
        teacherSchedule.subject_code = existingFirst.subject_code;
        teacherSchedule.subject = existingFirst.subject;
        teacherSchedule.units = existingFirst.units;
        teacherSchedule.room = existingFirst.room;
        teacherSchedule.start = existingFirst.start;
        teacherSchedule.end = existingFirst.end;
        teacherSchedule.day = existingFirst.day;
        teacherSchedule.recurrencePattern = existingFirst.recurrencePattern;
        teacherSchedule.background = existingFirst.background;

        // Save updated TeacherSchedule entity
        await this.teacherScheduleRepository.save(teacherSchedule);
      }
    }
  }

  async updateBeed(id: number, updateDto: UpdateFirstDto): Promise<void> {
    // Find the existing First entity along with related TeacherSchedules
    const existingFirst = await this.beedScheduleRepository.findOne({
      where: { id },
      relations: ['teacherSchedules'], // Ensure we load related TeacherSchedules
    });

    if (!existingFirst) {
      throw new NotFoundException(`First with ID ${id} not found`);
    }

    // Update the existing First entity with the new values
    Object.assign(existingFirst, updateDto);
    await this.beedScheduleRepository.save(existingFirst);

    if (
      existingFirst.teacherSchedules &&
      existingFirst.teacherSchedules.length > 0
    ) {
      for (const teacherSchedule of existingFirst.teacherSchedules) {
        // Update the related TeacherSchedule fields
        teacherSchedule.subject_id = existingFirst.subject_id;
        teacherSchedule.teacher_id = existingFirst.teacher_id;
        teacherSchedule.teacher = existingFirst.teacher;
        teacherSchedule.subject_code = existingFirst.subject_code;
        teacherSchedule.subject = existingFirst.subject;
        teacherSchedule.units = existingFirst.units;
        teacherSchedule.room = existingFirst.room;
        teacherSchedule.start = existingFirst.start;
        teacherSchedule.end = existingFirst.end;
        teacherSchedule.day = existingFirst.day;
        teacherSchedule.recurrencePattern = existingFirst.recurrencePattern;
        teacherSchedule.background = existingFirst.background;

        // Save updated TeacherSchedule entity
        await this.teacherScheduleRepository.save(teacherSchedule);
      }
    }
  }

  async updateMinor(id: number, updateDto: UpdateFirstDto): Promise<void> {
    // Find the existing First entity along with related TeacherSchedules
    const existingFirst = await this.minorScheduleRepository.findOne({
      where: { id },
      relations: ['teacherSchedules'], // Ensure we load related TeacherSchedules
    });

    if (!existingFirst) {
      throw new NotFoundException(`First with ID ${id} not found`);
    }

    // Update the existing First entity with the new values
    Object.assign(existingFirst, updateDto);
    await this.minorScheduleRepository.save(existingFirst);

    if (
      existingFirst.teacherSchedules &&
      existingFirst.teacherSchedules.length > 0
    ) {
      for (const teacherSchedule of existingFirst.teacherSchedules) {
        // Update the related TeacherSchedule fields
        teacherSchedule.subject_id = existingFirst.subject_id;
        teacherSchedule.teacher_id = existingFirst.teacher_id;
        teacherSchedule.teacher = existingFirst.teacher;
        teacherSchedule.subject_code = existingFirst.subject_code;
        teacherSchedule.subject = existingFirst.subject;
        teacherSchedule.units = existingFirst.units;
        teacherSchedule.room = existingFirst.room;
        teacherSchedule.start = existingFirst.start;
        teacherSchedule.end = existingFirst.end;
        teacherSchedule.day = existingFirst.day;
        teacherSchedule.recurrencePattern = existingFirst.recurrencePattern;
        teacherSchedule.background = existingFirst.background;

        // Save updated TeacherSchedule entity
        await this.teacherScheduleRepository.save(teacherSchedule);
      }
    }
  }

  //^ DELETE
  async delete(id: number): Promise<void> {
    // First, delete related TeacherSchedule entries
    const deleteRelatedResult = await this.teacherScheduleRepository.delete({
      transferIdBsed: id, // Ensure you use the correct column to match related schedules
    });

    if (deleteRelatedResult.affected === 0) {
      console.warn(`No related teacher schedules found for schedule ID ${id}`);
    }

    // Now delete the First schedule
    const result = await this.bsedScheduleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
  }

  async deleteBeed(id: number): Promise<void> {
    // First, delete related TeacherSchedule entries
    const deleteRelatedResult = await this.teacherScheduleRepository.delete({
      transferIdBeed: id, // Ensure you use the correct column to match related schedules
    });

    if (deleteRelatedResult.affected === 0) {
      console.warn(`No related teacher schedules found for schedule ID ${id}`);
    }

    // Now delete the First schedule
    const result = await this.beedScheduleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
  }

  async deleteMinor(id: number): Promise<void> {
    // First, delete related TeacherSchedule entries
    const deleteRelatedResult = await this.teacherScheduleRepository.delete({
      transferIdMinor: id, // Ensure you use the correct column to match related schedules
    });

    if (deleteRelatedResult.affected === 0) {
      console.warn(`No related teacher schedules found for schedule ID ${id}`);
    }

    // Now delete the First schedule
    const result = await this.minorScheduleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
  }
}
