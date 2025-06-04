import { CreatePostRepository } from "../../repositories/createPostRepository";

export class PostPostUseCase {
  constructor(private postRepository: CreatePostRepository) {}

  async execute(data: FormData) {
    return await this.postRepository.create(data);
  }
}
