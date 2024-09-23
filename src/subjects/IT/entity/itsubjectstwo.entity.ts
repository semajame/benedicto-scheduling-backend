import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'bsit2' })
export class itsubjectstwoEntity {
  @PrimaryColumn()
  subject_code: string;

  @Column()
  subject: string;

  @Column()
  units: number;

  @Column({ nullable: true })
  pre_req: string;
}
