import { NotificationRepository } from "../../repositories/notificationRepository";
import { TNotification } from "../types/TNotification";

export class PostNotificationUseCase {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(data: TNotification) {
    return await this.notificationRepository.save(data);
  }
}
