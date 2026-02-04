import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Follow {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  followerId!: number;

  @Column()
  followingId!: number;

  @CreateDateColumn()
  createdAt!: Date;
}
