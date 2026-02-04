import { AppDataSource } from "../config/data-source";
import { Post } from "../entities/post.entity";

const postRepository = AppDataSource.getRepository(Post);

export const createPost = async (data: Partial<Post>) => {
  const post = postRepository.create(data);
  return await postRepository.save(post);
};

export const softDeletePost = async (postId: number, userId: number) => {
  const post = await postRepository.findOne({
    where: { id: postId, userId },
  });

  if (!post) throw new Error("Post not found");

  post.deletedAt = new Date();

  return await postRepository.save(post);
};
