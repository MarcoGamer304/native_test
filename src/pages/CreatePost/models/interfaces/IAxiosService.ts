import { TEndpointPost } from "../types/TEndpointPost";

export interface IAxiosService{
  create: (data: FormData) => Promise<TEndpointPost>;
}
