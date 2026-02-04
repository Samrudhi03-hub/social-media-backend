import { AppDataSource } from "../config/data-source";
import { Post } from "../entities/post.entity";
import { Follow } from "../entities/follow.entity";
import { In, IsNull } from "typeorm";

const postRepo = AppDataSource.getRepository(Post);
const followRepo = AppDataSource.getRepository(Follow);

export const getFeed = async (
  userId: number,
  page: number,
  limit: number
) => {
  const follows = await followRepo.find({
    where: { followerId: userId },
  });

  const followingIds = follows.map((f) => f.followingId);

  if (followingIds.length === 0) {
    return [];
  }

  const posts = await postRepo.find({
    where: {
      userId: In(followingIds),
      deletedAt: IsNull(),
    },
    order: { createdAt: "DESC" },
    skip: (page - 1) * limit,
    take: limit,
  });

  return posts;
};
