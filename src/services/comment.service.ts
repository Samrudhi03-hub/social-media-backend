import { AppDataSource } from "../config/data-source";
import { Comment } from "../entities/comment.entity";
import { Post } from "../entities/post.entity";
import { createNotification } from "./notification.service";

const commentRepo = AppDataSource.getRepository(Comment);
const postRepo = AppDataSource.getRepository(Post);

export const addComment = async (
  postId: number,
  userId: number,
  content: string,
) => {
  const comment = commentRepo.create({ postId, userId, content });
  await commentRepo.save(comment);

  const post = await postRepo.findOne({ where: { id: postId } });

  if (post) {
    post.commentsCount += 1;
    await postRepo.save(post);

    if (post.userId !== userId) {
      await createNotification(
        post.userId,
        userId,
        "comment",
        "Someone commented on your post",
      );
    }
  }

  return comment;
};
