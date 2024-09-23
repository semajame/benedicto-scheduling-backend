import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'bsit1' })
export class itsubjectsEntity {
  @PrimaryColumn()
  subject_code: string;

  @Column()
  subject: string;

  @Column()
  units: number;

  @Column({ nullable: true })
  pre_req: string;
}
