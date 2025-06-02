import { IPost } from "../models/interfaces/IPost";
import { TEndpointPost } from "../models/types/TEndpointPost";
import { TPost } from "../models/types/TPost";
import { AxiosService } from "./axiosService";

export class PostService implements IPost {
  private static instance: PostService;
  private static readonly axiosService = AxiosService.getInstance();

  static getInstance(): PostService {
    if (!PostService.instance) {
      PostService.instance = new PostService();
    }
    return PostService.instance;
  }

  async getAll(): Promise<TEndpointPost[]> {
    return await PostService.axiosService.getAll(`posts`);
  }

  async getByUser(id: number): Promise<TEndpointPost[]> {
    return await PostService.axiosService.getAll(`posts/${id}`);
  }

  async save(data: TPost): Promise<TEndpointPost> {
    return await PostService.axiosService.save(`posts`, data);
  }

  async delete(id: number): Promise<TEndpointPost> {
    return await PostService.axiosService.delete(`posts/${id}`);
  }

  async put(id: number, data: TPost): Promise<TEndpointPost> {
    return await PostService.axiosService.put(`posts/${id}`, data);
  }
}
