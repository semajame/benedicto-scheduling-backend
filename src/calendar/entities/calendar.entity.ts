import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { UserRole } from 'src/enums/role.enum'; // Import UserRole enum

@Entity({ name: 'calendar' })
export class CalendarEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  subject: string;

  @Column({ type: 'varchar', length: 255 })
  location: string;

  @Column({ type: 'varchar', length: 255 })
  start: string;

  @Column({ type: 'varchar', length: 255 })
  end: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  background: string | null;

  @Column({ type: 'enum', enum: UserRole }) // Add a role field that uses the UserRole enum
  role: UserRole;
}
