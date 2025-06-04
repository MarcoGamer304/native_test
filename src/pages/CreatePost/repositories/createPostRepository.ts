import { IPost } from "../models/interfaces/IPost";
import { TEndpointPost } from "../models/types/TEndpointPost";
import { CreatePostService } from "../services/CreatePostService";

export class CreatePostRepository implements IPost {
  private static instance: CreatePostRepository;
  private createPostService = CreatePostService.getInstance();

  public static getInstance(): CreatePostRepository {
    if (!CreatePostRepository.instance) {
      CreatePostRepository.instance = new CreatePostRepository();
    }
    return CreatePostRepository.instance;
  }

  async create(data: FormData): Promise<TEndpointPost> {
    const response = await this.createPostService.create(data);
    if (!response) {
      throw new Error("Error creating post, please try again later.");
    }
    return response;
  }
}
