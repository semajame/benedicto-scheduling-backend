import { TeacherSchedule } from 'src/typeorm';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'beed_schedules' })
export class beedScheduleEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // // Employee ID from the external API
  // @Column({ type: 'int', nullable: true })
  // employee_id: number | null;

  @Column({ type: 'int' })
  subject_id: number;

  @Column({ type: 'int', nullable: true })
  teacher_id: number | null;

  @Column({ type: 'varchar', length: 255 })
  subject_code: string;

  @Column({ type: 'varchar', length: 255 })
  subject: string;

  @Column({ type: 'int' })
  units: number;

  @Column({ type: 'varchar', length: 255 })
  room: string;

  @Column({ type: 'int' })
  year: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  teacher: string;

  @Column({ type: 'varchar', length: 255 })
  start: string;

  @Column({ type: 'varchar', length: 255 })
  end: string;

  @Column({ type: 'varchar', length: 255 })
  day: string;

  @Column({ type: 'int', nullable: true })
  semester_id: number | null;

  @Column({ type: 'varchar', nullable: true })
  semester: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  school_year: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  recurrencePattern: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  background: string | null;

  @Column({ type: 'boolean', default: false })
  transferred: boolean;

  @OneToMany(
    () => TeacherSchedule,
    (teacherSchedule) => teacherSchedule.beedSchedule,
    { cascade: true }, // Ensures cascading insert/update on TeacherSchedule
  )
  teacherSchedules: TeacherSchedule[];
}
