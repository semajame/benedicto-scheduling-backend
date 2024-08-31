import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity({ name: 'third_schedules' })
export class Third extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  subject_code: string;

  @Column({ type: 'varchar', length: 255 })
  subject: string;

  @Column({ type: 'int' })
  units: number;

  @Column({ type: 'varchar', length: 255 })
  room: string;

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
}
