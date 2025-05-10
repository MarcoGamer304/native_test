import { PostRepository } from "../../repositories/postRepository";

export class GetPostUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute(id: number) {
    return await this.postRepository.get(id);
  }
}
