import { NotificationRepository } from "../../repositories/notificationRepository";

export class GetAllNotificationsUseCase {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(id: number) {
    return await this.notificationRepository.getByUser(id);
  }
}
