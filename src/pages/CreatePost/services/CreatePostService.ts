import { IPost } from "../models/interfaces/IPost";
import { TPost } from "../models/types/TPost";
import { TEndpointPost } from "../models/types/TEndpointPost";
import { AxiosService } from "./axiosService";

export class CreatePostService implements IPost {
  private static instance: CreatePostService;
  private readonly axiosService = AxiosService.getInstance();

  static getInstance(): CreatePostService {
    if (!CreatePostService.instance) {
      CreatePostService.instance = new CreatePostService();
    }
    return CreatePostService.instance;
  }

  async create(data: FormData): Promise<TEndpointPost> {
    try {
      const result = await this.axiosService.create(data);
      return result;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
