import { AppDataSource } from "../config/data-source";
import { Like } from "../entities/like.entity";
import { Post } from "../entities/post.entity";

const likeRepo = AppDataSource.getRepository(Like);
const postRepo = AppDataSource.getRepository(Post);

export const toggleLike = async (postId: number, userId: number) => {
  const existing = await likeRepo.findOne({
    where: { postId, userId },
  });

  const post = await postRepo.findOne({ where: { id: postId } });

  if (!post) throw new Error("Post not found");

  if (existing) {
    await likeRepo.remove(existing);
    post.likesCount -= 1;
    await postRepo.save(post);
    return { liked: false };
  } else {
    const like = likeRepo.create({ postId, userId });
    await likeRepo.save(like);
    post.likesCount += 1;
    await postRepo.save(post);
    return { liked: true };
  }
};
