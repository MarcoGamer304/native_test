import { TEndpointNotification } from "../models/types/TEndPointNotification";
import { TNotification } from "../models/types/TNotification";
import { NotificationService } from "../services/notificationService";
import { INotification } from "../models/interfaces/INotification";

export class NotificationRepository implements INotification {
  private static instance: NotificationRepository;
  private notificationService = NotificationService.getInstance();

  public static getInstance(): NotificationRepository {
    if (!NotificationRepository.instance) {
      NotificationRepository.instance = new NotificationRepository();
    }
    return NotificationRepository.instance;
  }

  async get(id: number): Promise<TEndpointNotification> {
    const response = await this.notificationService.get(id);
    if (!response) {
      throw new Error("Error al obtener la notificación");
    }
    return await response;
  }

  async getByUser(id: number): Promise<TEndpointNotification[]> {
    const response = await this.notificationService.getByUser(id);
    if (!response) {
      throw new Error("Error al obtener las notificaciones");
    }
    return await response;
  }

  async save(data: TNotification): Promise<TEndpointNotification> {
    const response = await this.notificationService.save(data);
    if (!response) {
      throw new Error("Error al crear la notificación");
    }
    return await response;
  }

  async delete(id: number): Promise<TEndpointNotification> {
    const response = await this.notificationService.delete(id);
    if (!response) {
      throw new Error("Error al eliminar la notificación");
    }
    return await response;
  }

  async put(id: number, data: TNotification): Promise<TEndpointNotification> {
    const response = await this.notificationService.put(id, data);
    if (!response) {
      throw new Error("Error al actualizar la notificación");
    }
    return await response;
  }
}
