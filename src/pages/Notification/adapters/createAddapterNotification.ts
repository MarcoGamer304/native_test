import { EndpointNotification } from "../models/types/EndPointNotification";
import { notificationProps } from "../models/types/notificationProps";

export const createAddapterNotification = (
  notification: EndpointNotification
): notificationProps => {
  const formattedNotification: notificationProps = {
    user: notification.user,
    avatar: notification.avatar,
    message: notification.message,
  };

  return formattedNotification;
};
