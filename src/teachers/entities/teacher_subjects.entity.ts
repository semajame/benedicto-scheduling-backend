import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Teacher } from './teacher.entity'; // Adjust import path as needed
import { First } from 'src/schedule/first/entities/first.entity';
import { Second } from 'src/schedule/second/entities/second.entity';
import { Fourth } from 'src/schedule/fourth/entities/fourth.entity';

import { Third } from 'src/schedule/third/entities/third.entity';

@Entity({ name: 'teacher_schedules' })
export class TeacherSchedule extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Teacher, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'teacherId' })
  teacher: Teacher;

  @ManyToOne(() => First, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'firstId' })
  firstSchedule: First;

  @ManyToOne(() => Second, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'secondId' })
  secondSchedule: Second;

  @ManyToOne(() => Third, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'thirdId' })
  thirdSchedule: Third;

  @ManyToOne(() => Fourth, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'fourthId' })
  fourthSchedule: Fourth;

  @Column({ type: 'int', nullable: true })
  teacherId: number; // Foreign key for Teacher

  @Column({ type: 'int', nullable: true })
  firstId: number; // Foreign key for First (make sure it allows null if optional)

  @Column({ type: 'int', nullable: true })
  secondId: number; // Foreign key for Second (make sure it allows null if optional)

  @Column({ type: 'int', nullable: true })
  thirdId: number; // Foreign key for First (make sure it allows null if optional)

  @Column({ type: 'int', nullable: true })
  fourthId: number; // Foreign key for Second (make sure it allows null if optional)

  @Column({ type: 'varchar', length: 255 })
  subject_code: string;

  @Column({ type: 'varchar', length: 255 })
  subject: string;

  @Column({ type: 'int' })
  units: number;

  @Column({ type: 'varchar', length: 255 })
  room: string;

  @Column({ type: 'varchar', length: 255 })
  start: string;

  @Column({ type: 'varchar', length: 255 })
  end: string;

  @Column({ type: 'varchar', length: 255 })
  day: string;
}
