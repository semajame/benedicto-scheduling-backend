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
import { bsieScheduleEntity } from 'src/schedule/COE/entities/bsie-schedule.entity';
import { bsceScheduleEntity } from 'src/schedule/COE/entities/bsce-schedule.entity';
import { bseeScheduleEntity } from 'src/schedule/COE/entities/bsee-schedule.entity';

//^ CBM

import { bsaScheduleEntity } from 'src/schedule/CBM/entities/bsa-schedule.entity';
import { bsmmScheduleEntity } from 'src/schedule/CBM/entities/bsmm-schedule.entity';
import { bshmScheduleEntity } from 'src/schedule/CBM/entities/bshm-schedule.entity';
import { bshrmScheduleEntity } from 'src/schedule/CBM/entities/bshrm-schedule.entity';

@Entity({ name: 'teacher_schedules' })
export class TeacherSchedule extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Many-to-one relationships mapped to corresponding foreign key columns
  @ManyToOne(
    () => CcsScheduleEntitiy,
    (ccsSchedule) => ccsSchedule.teacherSchedules,
    { eager: true },
  )
  @JoinColumn({ name: 'transferIdCcs' }) // Use transferIdCcs for CCS schedules
  ccsSchedule: CcsScheduleEntitiy;

  @ManyToOne(
    () => bsedScheduleEntity,
    (bsedSchedule) => bsedSchedule.teacherSchedules,
    { eager: true },
  )
  @JoinColumn({ name: 'transferIdBsed' }) // Use transferIdBsed for BSED schedules
  bsedSchedule: bsedScheduleEntity;

  @ManyToOne(
    () => beedScheduleEntity,
    (beedSchedule) => beedSchedule.teacherSchedules,
    { eager: true },
  )
  @JoinColumn({ name: 'transferIdBeed' }) // Use transferIdBeed for BEED schedules
  beedSchedule: beedScheduleEntity;

  @ManyToOne(
    () => bsmeScheduleEntity,
    (bsmeSchedule) => bsmeSchedule.teacherSchedules,
    { eager: true },
  )
  @JoinColumn({ name: 'transferIdBsme' }) // Use transferIdBsme for BSME schedules
  bsmeSchedule: bsmeScheduleEntity;

  @ManyToOne(
    () => bsieScheduleEntity,
    (bsieSchedule) => bsieSchedule.teacherSchedules,
    { eager: true },
  )
  @JoinColumn({ name: 'transferIdBsie' }) // Use transferIdBsme for BSME schedules
  bsieSchedule: bsieScheduleEntity;

  @ManyToOne(
    () => bsceScheduleEntity,
    (bsceSchedule) => bsceSchedule.teacherSchedules,
    { eager: true },
  )
  @JoinColumn({ name: 'transferIdBsce' }) // Use transferIdBsme for BSME schedules
  bsceSchedule: bsceScheduleEntity;

  @ManyToOne(
    () => bseeScheduleEntity,
    (bseeSchedule) => bseeSchedule.teacherSchedules,
    { eager: true },
  )
  @JoinColumn({ name: 'transferIdBsee' }) // Use transferIdBsme for BSME schedules
  bseeSchedule: bseeScheduleEntity;

  //^ CBM

  @ManyToOne(
    () => bsaScheduleEntity,
    (bsaSchedule) => bsaSchedule.teacherSchedules,
    { eager: true },
  )
  @JoinColumn({ name: 'transferIdBsa' }) // Use transferIdBsme for BSME schedules
  bsaSchedule: bseeScheduleEntity;

  @ManyToOne(
    () => bsmmScheduleEntity,
    (bsmmSchedule) => bsmmSchedule.teacherSchedules,
    { eager: true },
  )
  @JoinColumn({ name: 'transferIdBsmm' }) // Use transferIdBsme for BSME schedules
  bsmmSchedule: bsmmScheduleEntity;

  @ManyToOne(
    () => bshmScheduleEntity,
    (bshmSchedule) => bshmSchedule.teacherSchedules,
    { eager: true },
  )
  @JoinColumn({ name: 'transferIdBshm' }) // Use transferIdBsme for BSME schedules
  bshmSchedule: bshmScheduleEntity;

  @ManyToOne(
    () => bshrmScheduleEntity,
    (bshrmSchedule) => bshrmSchedule.teacherSchedules,
    { eager: true },
  )
  @JoinColumn({ name: 'transferIdBshrm' }) // Use transferIdBsme for BSME schedules
  bshrmSchedule: bshrmScheduleEntity;

  @Column({ type: 'int', nullable: true }) // Ensure teacher name is required
  subject_id: number; // Store teacher's name

  @Column({ type: 'varchar', length: 255 })
  subject_code: string;

  @Column({ type: 'varchar', length: 255 })
  subject: string;

  @Column({ type: 'int', nullable: false }) // Ensure teacher name is required
  teacher_id: number; // Store teacher's name

  @Column({ type: 'varchar', length: 255, nullable: false }) // Ensure teacher name is required
  teacher: string; // Store teacher's name

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

  @Column({ type: 'int', nullable: true })
  transferIdCcs: number; // Foreign key for CcsScheduleEntity

  @Column({ type: 'int', nullable: true })
  transferIdBsed: number; // Foreign key for bsedScheduleEntity

  @Column({ type: 'int', nullable: true })
  transferIdBeed: number; // Foreign key for BeedScheduleEntity

  @Column({ type: 'int', nullable: true })
  transferIdBsme: number; // Foreign key for BsmeScheduleEntity

  @Column({ type: 'int', nullable: true })
  transferIdBsce: number; // Foreign key for BsmeScheduleEntity

  @Column({ type: 'int', nullable: true })
  transferIdBsee: number; // Foreign key for BsmeScheduleEntity

  @Column({ type: 'int', nullable: true })
  transferIdBsie: number; // Foreign key for BsmeScheduleEntity

  //^ CBM

  @Column({ type: 'int', nullable: true })
  transferIdBsa: number; // Foreign key for BsmeScheduleEntity

  @Column({ type: 'int', nullable: true })
  transferIdBsmm: number; // Foreign key for BsmeScheduleEntity

  @Column({ type: 'int', nullable: true })
  transferIdBshm: number; // Foreign key for BsmeScheduleEntity

  @Column({ type: 'int', nullable: true })
  transferIdBshrm: number; // Foreign key for BsmeScheduleEntity
}
