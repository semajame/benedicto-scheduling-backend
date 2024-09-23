import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'bsit3' })
export class itsubjectsthreeEntity {
  @PrimaryColumn()
  subject_code: string;

  @Column()
  subject: string;

  @Column()
  units: number;

  @Column({ nullable: true })
  pre_req: string;
}
