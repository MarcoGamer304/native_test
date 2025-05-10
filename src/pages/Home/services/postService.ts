import { IPost } from "../models/interfaces/IPost";
import { TEndpointPost } from "../models/types/TEndpointPost";
import { TPost } from "../models/types/TPost";
import Posts from "../ProvisionalData/twit";

export class PostService implements IPost {
  private static instance: PostService;

  static getInstance(): PostService {
    if (!PostService.instance) {
      PostService.instance = new PostService();
    }
    return PostService.instance;
  }

  async get(id: number): Promise<TEndpointPost> {
    return await Posts[1];
  }

  async getByUser(id: number): Promise<TEndpointPost[]> {
    return await Posts;
  }

  async save(data: TPost): Promise<TEndpointPost> {
    return await Posts[1];
  }

  async delete(id: number): Promise<TEndpointPost> {
    return await Posts[1];
  }

  async put(id: number, data: TPost): Promise<TEndpointPost> {
    return await Posts[1];
  }
}
