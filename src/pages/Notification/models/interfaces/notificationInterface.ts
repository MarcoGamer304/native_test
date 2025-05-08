import { EndpointNotification } from "../types/EndPointNotification";
import { notificationProps } from "../types/notificationProps";

export interface notificationInterface {
  getNotification: (id: number) => Promise<EndpointNotification>;
  getAllNotificationsByUser: (id: number) => Promise<EndpointNotification[]>;
  postNotification: (data: notificationProps) => Promise<EndpointNotification>;
  deleteNotification: (id: number) => Promise<EndpointNotification>;
  putNotification: (id: number, data: notificationProps) => Promise<EndpointNotification>;
}