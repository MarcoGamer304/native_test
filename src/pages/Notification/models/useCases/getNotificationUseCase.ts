import { NotificationRepository } from "../../repositories/notificationRepository";

export class GetNotificationUseCase {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(id: number) {
    return await this.notificationRepository.getNotification(id);
  }
}
