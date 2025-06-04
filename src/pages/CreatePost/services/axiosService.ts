import axios from "axios";
import { IAxiosService } from "../models/interfaces/IAxiosService";
import { TPost } from "../models/types/TPost";
import { API_URLS } from "../../../essential/apiUrls";
import { TEndpointPost } from "../models/types/TEndpointPost";

export class AxiosService implements IAxiosService {
  private static instance: AxiosService;
  private readonly baseUrl = API_URLS.laravel;

  public static getInstance(): AxiosService {
    if (!AxiosService.instance) {
      AxiosService.instance = new AxiosService();
    }
    return AxiosService.instance;
  }

  async create(data: FormData): Promise<TEndpointPost> {
    try {
      console.log("Creating post with data:", data);
      const response = await axios.post<any>(this.baseUrl + "posts", data);

      if (response.status !== 201) {
        throw new Error(
          `Cant create post or server error at ${this.baseUrl + "posts"}`
        );
      }
      return response.data;
    } catch (error) {
      throw new Error(
        `Server error create post, try later`
      );
    }
  }

}
