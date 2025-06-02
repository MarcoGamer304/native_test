import { PostRepository } from "../../repositories/postRepository";

export class GetAllPostUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute() {
    return await this.postRepository.getAll();
  }
}
