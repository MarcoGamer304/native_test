import { TEndpointNotification } from "../models/types/TEndPointNotification";
import { TNotification } from "../models/types/TNotification";

export const createAddapterNotification = (
  notification: TEndpointNotification
): TNotification => {
  return {
    id: notification.id,
    user: notification.user,
    avatar: notification.avatar,
    message: notification.message,
  };
};

export const createAddapterAllNotification = (
  notification: TEndpointNotification[]
): TNotification[] => {
  return notification.map((notification) => ({
    id: notification.id,
    user: notification.user,
    avatar: notification.avatar,
    message: notification.message,
  }));
};
