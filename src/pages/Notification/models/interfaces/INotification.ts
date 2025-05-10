import { TEndpointNotification } from "../types/TEndPointNotification";
import { TNotification } from "../types/TNotification";

export interface INotification {
  get: (id: number) => Promise<TEndpointNotification>;
  getByUser: (id: number) => Promise<TEndpointNotification[]>;
  save: (data: TNotification) => Promise<TEndpointNotification>;
  delete: (id: number) => Promise<TEndpointNotification>;
  put: (id: number, data: TNotification) => Promise<TEndpointNotification>;
}
