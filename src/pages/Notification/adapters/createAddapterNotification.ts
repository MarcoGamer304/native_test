import { EndpointNotification } from "../models/types/EndPointNotification";
import { notificationProps } from "../models/types/notificationProps";

export const createAddapterNotification = (
  notification: EndpointNotification
): notificationProps => {
  return {
    id: notification.id,
    user: notification.user,
    avatar: notification.avatar,
    message: notification.message,
  };
};

export const createAddapterAllNotification = (
  notification: EndpointNotification[]
): notificationProps[] => {
  return notification.map((notification) => ({
    id: notification.id,
    user: notification.user,
    avatar: notification.avatar,
    message: notification.message,
  }));
};
