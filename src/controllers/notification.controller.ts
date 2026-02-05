import { Request, Response } from "express";
import {
  getNotifications,
  markAsRead,
} from "../services/notification.service";

// GET /api/notifications
export const getMyNotifications = async (
  req: Request,
  res: Response
) => {
  try {
    const user = (req as any).user;

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const notifications = await getNotifications(
      user.userId,
      page,
      limit
    );

    res.json({
      message: "Notifications fetched",
      data: notifications,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching notifications",
    });
  }
};

// PATCH /api/notifications/:id/read
export const markNotificationRead = async (
  req: Request,
  res: Response
) => {
  try {
    const user = (req as any).user;
    const id = Number(req.params.id);

    await markAsRead(id, user.userId);

    res.json({
      message: "Notification marked as read",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating notification",
    });
  }
};
