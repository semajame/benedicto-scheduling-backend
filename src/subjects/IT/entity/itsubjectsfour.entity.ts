import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'bsit4' })
export class itsubjectsfourEntity {
  @PrimaryColumn()
  subject_code: string;

  @Column()
  subject: string;

  @Column()
  units: number;

  @Column({ nullable: true })
  pre_req: string;
}