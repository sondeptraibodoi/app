/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
  GUEST = 'guest',
}

@Entity()
export class Users {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  avatar_url: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  phonenumber: string;

  @Column()
  password: string;

  @Column({ type: 'timestamptz' })
  email_verified_at: Date;

  @Column()
  remember_token: string;

  @Column({ type: 'enum', enum: UserRole })
  role: UserRole;

  @Column()
  birthday: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'timestamptz' })
  created_at: Date;

  @Column({ type: 'timestamptz' })
  updated_at: Date;
}
