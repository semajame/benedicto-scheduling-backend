import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Teacher } from './teacher.entity'; // Adjust import path as needed

@Entity({ name: 'teacher_schedules' })
export class TeacherSchedule extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Teacher, { eager: true, onDelete: 'CASCADE' }) // This creates the relationship
  @JoinColumn({ name: 'teacherId' }) // This links the teacherId column to the Teacher entity
  teacher: Teacher;

  @Column({ type: 'int' })
  teacherId: number; // Foreign key

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
