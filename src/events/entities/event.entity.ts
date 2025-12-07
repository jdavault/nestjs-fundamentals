import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Index(['name', 'type'])
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  name: string;
  @Column()
  type: string;

  @Column('json')
  payload: Record<string, any>;
}
