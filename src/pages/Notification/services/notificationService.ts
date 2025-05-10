import notificationData from "../ProvisionalData/notificationExamples";
import { INotification } from "../models/interfaces/INotification";
import { TNotification } from "../models/types/TNotification";
//Singleton
export class NotificationService implements INotification {
  private static instance: NotificationService;

  static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  async get(id: number): Promise<TNotification> {
    return notificationData[1];
  }

  async getByUser(id: number): Promise<TNotification[]> {
    return notificationData;
  }

  async save(data: any): Promise<TNotification> {
    return notificationData[1];
  }

  async delete(id: number): Promise<TNotification> {
    return notificationData[1];
  }

  async put(id: number, data: any): Promise<TNotification> {
    return notificationData[1];
  }
}
