import { TEndpointPost } from "../types/TEndpointPost";
import { TPost } from "../types/TPost";

export interface IAxiosService{
  getAll: (url: string) => Promise<TEndpointPost[]>;
  getByUser: (url: string) => Promise<TEndpointPost[]>;
  save: (url: string, data: TPost) => Promise<TEndpointPost>;
  delete: (url: string) => Promise<TEndpointPost>;
  put: (url: string, data: TPost) => Promise<TEndpointPost>;
}
