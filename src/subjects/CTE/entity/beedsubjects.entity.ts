import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'beed' })
export class beedSubjectsEntity {
  @PrimaryColumn()
  subject_code: string;

  @Column()
  subject: string;

  @Column()
  units: number;

  @Column({ nullable: true })
  pre_req: string;

  @Column()
  year: number;
}
