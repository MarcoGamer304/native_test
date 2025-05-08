import notificationData from "../ProvisionalData/notificationExamples";
import { notificationProps } from "../models/types/notificationProps";
//Singleton
export class NotificationService {
  private static instance: NotificationService;

  static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  async getNotification(id: number): Promise<notificationProps | null> {
    return null;
  }

  async getAllNotificationsByUser(id: number): Promise<notificationProps[] | null> {
    return notificationData;
  }

  async postNotification(data: any): Promise<notificationProps | null> {
    return null;
  }

  async deleteNotification(id: number): Promise<notificationProps | null> {
    return null;
  }

  async putNotification(
    id: number,
    data: any
  ): Promise<notificationProps | null> {
    return null;
  }
}
