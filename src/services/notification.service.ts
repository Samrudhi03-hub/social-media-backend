import { AppDataSource } from "../config/data-source";
import { Notification } from "../entities/notification.entity";

const notificationRepo = AppDataSource.getRepository(Notification);

export const createNotification = async (
  receiverId: number,
  senderId: number,
  type: "like" | "comment" | "follow",
  message: string,
) => {
  const notification = notificationRepo.create({
    receiverId,
    senderId,
    type,
    message,
  });

  return await notificationRepo.save(notification);
};

export const getNotifications = async (
  userId: number,
  page: number,
  limit: number,
) => {
  return await notificationRepo.find({
    where: { receiverId: userId },
    order: { createdAt: "DESC" },
    skip: (page - 1) * limit,
    take: limit,
  });
};

export const markAsRead = async (id: number, userId: number) => {
  const notification = await notificationRepo.findOne({
    where: { id, receiverId: userId },
  });

  if (!notification) throw new Error("Not found");

  notification.isRead = true;
  return await notificationRepo.save(notification);
};
