import { TeacherSchedule } from 'src/typeorm'; // Adjust the import path as needed
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'ccs_schedules' })
export class CcsScheduleEntitiy extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // // Employee ID from the external API
  // @Column({ type: 'int', nullable: true })
  // employee_id: number | null;

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

  @Column({ type: 'varchar', length: 255, nullable: true })
  recurrencePattern: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  background: string | null;

  @Column({ type: 'boolean', default: false })
  transferred: boolean;

  // Relation to TeacherSchedule entity
  @OneToMany(
    () => TeacherSchedule,
    (teacherSchedule) => teacherSchedule.ccsSchedule,
    { cascade: true }, // Ensures cascading insert/update on TeacherSchedule
  )
  teacherSchedules: TeacherSchedule[];
}
