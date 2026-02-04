import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: number;

  @Column("text")
  content!: string;

  @Column({ nullable: true })
  imageUrl!: string;

  @Column({ default: 0 })
  likesCount!: number;

  @Column({ default: 0 })
  commentsCount!: number;

  @Column({ type: "timestamp", nullable: true })
  deletedAt!: Date | null;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
