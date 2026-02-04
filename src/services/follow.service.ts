import { AppDataSource } from "../config/data-source";
import { Follow } from "../entities/follow.entity";

const followRepo = AppDataSource.getRepository(Follow);

export const toggleFollow = async (
  followerId: number,
  followingId: number
) => {
  const existing = await followRepo.findOne({
    where: { followerId, followingId },
  });

  if (existing) {
    await followRepo.remove(existing);
    return { followed: false };
  }

  const follow = followRepo.create({ followerId, followingId });
  await followRepo.save(follow);

  return { followed: true };
};
