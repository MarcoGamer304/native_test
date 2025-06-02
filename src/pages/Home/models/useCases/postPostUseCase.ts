import { PostRepository } from "../../repositories/postRepository";
import { TPost } from "../types/TPost";

export class PostPostUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute(data: TPost) {
    return await this.postRepository.save(data);
  }
}
