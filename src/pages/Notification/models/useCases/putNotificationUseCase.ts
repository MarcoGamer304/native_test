import { NotificationRepository } from "../../repositories/notificationRepository";
import { notificationProps } from "../types/notificationProps";

export class PutNotificationUseCase {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(id: number, data: notificationProps) {
    return await this.notificationRepository.putNotification(id, data);
  }
}
