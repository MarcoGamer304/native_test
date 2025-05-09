import { useState, useEffect } from "react";
import { notificationProps } from "../models/types/notificationProps";
import { NotificationRepository } from "../repositories/notificationRepository";
import { GetAllNotificationsUseCase } from "../models/useCases/getAllNotificationsUseCase";
import { createAddapterAllNotification } from "../adapters/createAddapterNotification";

const useNotification = (id: number) => {
  const [allNotifications, setAllNotifications] = useState<
    notificationProps[] | null
  >(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const notificationRepository = NotificationRepository.getInstance();
  const getAllNotificationsUseCase = new GetAllNotificationsUseCase(
    notificationRepository
  );

  const fetchAllNotifications = async () => {
    try {
      setLoading(true);
      const result = await getAllNotificationsUseCase.execute(id);
      const forrmatted = createAddapterAllNotification(result);
      setAllNotifications(forrmatted);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchAllNotifications();
  }, [id]);

  return { allNotifications, loading, error, refresh: fetchAllNotifications };
};

export default useNotification;
