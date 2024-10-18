import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CcsScheduleEntitiy } from 'src/schedule/CCS/entities/ccs-schedule.entity';
import { bsedScheduleEntity } from 'src/typeorm';
import { beedScheduleEntity } from 'src/schedule/CTE/BSELEM/entities/beed-schedule.entity';
import { bsmeScheduleEntity } from 'src/schedule/COE/entities/bsme-schedule.entity';

@Entity({ name: 'teacher_schedules' })
export class TeacherSchedule extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false }) // Ensure teacher name is required
  teacher: string; // Store teacher's name

  @Column({ type: 'int', nullable: true })
  transferIdCcs: number; // Foreign key for CcsScheduleEntity

  @Column({ type: 'int', nullable: true })
  transferIdBsed: number; // Foreign key for bsedScheduleEntity

  @Column({ type: 'int', nullable: true })
  transferIdBeed: number; // Foreign key for BeedScheduleEntity

  @Column({ type: 'int', nullable: true })
  transferIdBsme: number; // Foreign key for BeedScheduleEntity

  @ManyToOne(
    () => bsedScheduleEntity,
    (bsedSchedule) => bsedSchedule.teacherSchedules,
    { eager: true },
  )
  @ManyToOne(
    () => beedScheduleEntity,
    (beedSchedule) => beedSchedule.teacherSchedules,
    { eager: true },
  )
  @ManyToOne(
    () => CcsScheduleEntitiy,
    (ccsSchedule) => ccsSchedule.teacherSchedules,
    { eager: true },
  )
  @ManyToOne(
    () => bsmeScheduleEntity,
    (bsmeSchedule) => bsmeSchedule.teacherSchedules,
    { eager: true },
  )
  @JoinColumn({ name: 'transferIdCcs' }) // Use transferIdCcs for CCS schedules
  ccsSchedule: CcsScheduleEntitiy;

  @JoinColumn({ name: 'transferIdBsed' }) // Use transferIdBsed for BSED schedules
  bsedSchedule: bsedScheduleEntity;

  @JoinColumn({ name: 'transferIdBsed' }) // Use transferIdBsed for BEED schedules
  beedSchedule: beedScheduleEntity;

  @JoinColumn({ name: 'transferIdBsme' }) // Use transferIdBsed for BEED schedules
  bsmeSchedule: bsmeScheduleEntity;

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
