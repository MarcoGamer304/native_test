import { NotificationRepository } from "../../repositories/notificationRepository";
import { notificationProps } from "../types/notificationProps";

export class PostNotificationUseCase {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(data: notificationProps) {
    return await this.notificationRepository.postNotification(data);
  }
}
