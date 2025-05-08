import { EndpointNotification } from "../models/types/EndPointNotification";
import { notificationProps } from "../models/types/notificationProps";
import { NotificationService } from "../services/notificationService";
import { notificationInterface } from "../models/interfaces/notificationInterface";

export class NotificationRepository implements notificationInterface {
  private static instance: NotificationRepository;
  private notificationService = NotificationService.getInstance();

  public static getInstance(): NotificationRepository {
    if (!NotificationRepository.instance) {
      NotificationRepository.instance = new NotificationRepository();
    }
    return NotificationRepository.instance;
  }

  async getNotification(id: number): Promise<EndpointNotification> {
    const response = await this.notificationService.getNotification(id);
    if (!response) {
      throw new Error("Error al obtener la notificación");
    }
    return await response;
  }

  async getAllNotificationsByUser(id: number): Promise<EndpointNotification[]> {
    const response = await this.notificationService.getAllNotificationsByUser(
      id
    );
    if (!response) {
      throw new Error("Error al obtener las notificaciones");
    }
    return await response;
  }

  async postNotification(
    data: notificationProps
  ): Promise<EndpointNotification> {
    const response = await this.notificationService.postNotification(data);
    if (!response) {
      throw new Error("Error al crear la notificación");
    }
    return await response;
  }

  async deleteNotification(id: number): Promise<EndpointNotification> {
    const response = await this.notificationService.deleteNotification(id);
    if (!response) {
      throw new Error("Error al eliminar la notificación");
    }
    return await response;
  }

  async putNotification(
    id: number,
    data: notificationProps
  ): Promise<EndpointNotification> {
    const response = await this.notificationService.putNotification(id, data);
    if (!response) {
      throw new Error("Error al actualizar la notificación");
    }
    return await response;
  }
}
