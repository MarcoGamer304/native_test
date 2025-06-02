import { IPost } from "../models/interfaces/IPost";
import { TEndpointPost } from "../models/types/TEndpointPost";
import { PostService } from "../services/postService";
import { TPost } from "../models/types/TPost";

export class PostRepository implements IPost {
  private static instance: PostRepository;
  private postService = PostService.getInstance();

  public static getInstance(): PostRepository {
    if (!PostRepository.instance) {
      PostRepository.instance = new PostRepository();
    }
    return PostRepository.instance;
  }

  async getAll(): Promise<TEndpointPost[]> {
    const response = await this.postService.getAll();
    if (!response) { 
      throw new Error("Error al obtener la notificación");
    }
    return response;
  }

  async getByUser(id: number): Promise<TEndpointPost[]> {
    const response = await this.postService.getByUser(id);
    if (!response) {
      throw new Error("Error al obtener las notificaciones");
    }
    return response;
  }

  async save(data: TPost): Promise<TEndpointPost> {
    const response = await this.postService.save(data);
    if (!response) {
      throw new Error("Error al crear la notificación");
    }
    return response;
  }

  async delete(id: number): Promise<TEndpointPost> {
    const response = await this.postService.delete(id);
    if (!response) {
      throw new Error("Error al eliminar la notificación");
    }
    return response;
  }

  async put(id: number, data: TPost): Promise<TEndpointPost> {
    const response = await this.postService.put(id, data);
    if (!response) {
      throw new Error("Error al actualizar la notificación");
    }
    return response;
  }
}
