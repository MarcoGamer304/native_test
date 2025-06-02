import { TEndpointPost } from "../types/TEndpointPost";
import { TPost } from "../types/TPost";

export interface IPost{
  getAll: () => Promise<TEndpointPost[]>;
  getByUser: (id: number) => Promise<TEndpointPost[]>;
  save: (data: TPost) => Promise<TEndpointPost>;
  delete: (id: number) => Promise<TEndpointPost>;
  put: (id: number, data: TPost) => Promise<TEndpointPost>;
}
