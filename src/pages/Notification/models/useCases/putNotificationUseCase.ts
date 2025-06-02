import { NotificationRepository } from "../../repositories/notificationRepository";
import { TNotification } from "../types/TNotification";

export class PutNotificationUseCase {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(id: number, data: TNotification) {
    return await this.notificationRepository.put(id, data);
  }
}
