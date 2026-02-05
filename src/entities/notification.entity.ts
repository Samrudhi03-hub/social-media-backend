import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  receiverId!: number; // who receives notification

  @Column()
  senderId!: number; // who triggered it

  @Column()
  type!: "like" | "comment" | "follow";

  @Column()
  message!: string;

  @Column({ default: false })
  isRead!: boolean;

  @CreateDateColumn()
  createdAt!: Date;
}
