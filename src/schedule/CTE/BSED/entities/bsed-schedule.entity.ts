import { TeacherSchedule } from 'src/typeorm';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'bsed_schedules' })
export class bsedScheduleEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Use employee_id from the external API
  @Column({ type: 'int', nullable: false })
  employee_id: number;

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

  // @OneToMany(
  //   () => TeacherSchedule,
  //   (teacherSchedule) => teacherSchedule.bsedSchedule,
  //   { cascade: true },
  // )
  // teacherSchedules: TeacherSchedule[];
}