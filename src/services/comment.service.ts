import { AppDataSource } from "../config/data-source";
import { Comment } from "../entities/comment.entity";
import { Post } from "../entities/post.entity";

const commentRepo = AppDataSource.getRepository(Comment);
const postRepo = AppDataSource.getRepository(Post);

export const addComment = async (
  postId: number,
  userId: number,
  content: string
) => {
  const comment = commentRepo.create({ postId, userId, content });
  await commentRepo.save(comment);

  const post = await postRepo.findOne({ where: { id: postId } });

  if (post) {
    post.commentsCount += 1;
    await postRepo.save(post);
  }

  return comment;
};
