// import {
//   Entity,
//   Column,
//   PrimaryGeneratedColumn,
//   Unique,
//   BaseEntity,
// } from 'typeorm';

// @Entity({ name: 'Teachers' })
// @Unique(['email'])
// export class Teacher extends BaseEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ type: 'varchar', length: 50 })
//   firstName: string;

//   @Column({ type: 'varchar', length: 50 })
//   lastName: string;

//   @Column({ type: 'varchar', length: 100 })
//   email: string;

//   @Column({ type: 'varchar', length: 20, nullable: true })
//   phoneNumber: string;

//   @Column({ type: 'varchar', length: 255, nullable: true })
//   address: string;
// }
