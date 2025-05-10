import { PostRepository } from "../../repositories/postRepository";

export class DeletePostUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute(id: number) {
    return await this.postRepository.delete(id);
  }
}
