import { AppDataSource } from "../config/data-source";
import { Follow } from "../entities/follow.entity";
import { createNotification } from "./notification.service";

const followRepo = AppDataSource.getRepository(Follow);

export const toggleFollow = async (followerId: number, followingId: number) => {
  const existing = await followRepo.findOne({
    where: { followerId, followingId },
  });

  if (existing) {
    await followRepo.remove(existing);
    return { followed: false };
  }

  const follow = followRepo.create({ followerId, followingId });
  await followRepo.save(follow);

  await createNotification(
    followingId,
    followerId,
    "follow",
    "Someone followed you",
  );

  return { followed: true };
};
