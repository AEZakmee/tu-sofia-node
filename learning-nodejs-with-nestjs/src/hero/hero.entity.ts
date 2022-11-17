// import { Power } from 'src/powers/power.entity';
import { Universe } from 'src/universe/universe.entity';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Hero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @ManyToOne(() => Universe, (universe) => universe.heroes)
  universe: Universe;
}
