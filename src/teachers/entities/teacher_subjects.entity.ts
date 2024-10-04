import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
// import { Teacher } from './teacher.entity'; // Adjust import path as needed
import { CcsScheduleEntitiy } from 'src/schedule/CCS/entities/ccs-schedule.entity';

@Entity({ name: 'teacher_schedules' })
export class TeacherSchedule extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToOne(() => Teacher, { eager: true })
  // @JoinColumn({ name: 'employee_id' })
  // teacher: Teacher;

  @Column({ type: 'int', nullable: true })
  transferId: number; // Foreign key for CcsScheduleEntity

  @ManyToOne(
    () => CcsScheduleEntitiy,
    (ccsSchedule) => ccsSchedule.teacherSchedules,
  )
  @JoinColumn({ name: 'transferId' })
  ccsSchedule: CcsScheduleEntitiy;

  @Column({ type: 'int', nullable: true }) // Change this to 'nullable: true'
  employee_id: number | null; // Update type to number | null

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
