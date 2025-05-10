import { NotificationRepository } from "../../repositories/notificationRepository";

export class DeleteNotificationUseCase {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(id: number) {
    return await this.notificationRepository.delete(id);
  }
}
