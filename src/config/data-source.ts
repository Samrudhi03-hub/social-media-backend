import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { User } from "../entities/user.entity";
import { Post } from "../entities/post.entity";
import { Like } from "../entities/like.entity";
import { Comment } from "../entities/comment.entity";
import { Follow } from "../entities/follow.entity";
import { Notification } from "../entities/notification.entity";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  synchronize: true, // auto-create tables
  logging: false,

  entities: [User, Post, Like, Comment, Follow, Notification],
});
