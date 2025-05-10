import { PostRepository } from "../../repositories/postRepository";

export class GetAllPostUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute(id: number) {
    return await this.postRepository.getByUser(id);
  }
}
