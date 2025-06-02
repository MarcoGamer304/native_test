import { PostRepository } from "../../repositories/postRepository";
import { TPost } from "../types/TPost";

export class PutPostUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute(id: number, data: TPost) {
    return await this.postRepository.put(id, data);
  }
}
