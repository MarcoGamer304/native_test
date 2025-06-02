import axios from "axios";
import { IAxiosService } from "../models/interfaces/IAxiosService";
import { TLogin } from "../models/types/TLogin";
import { API_URLS } from "../../../essential/apiUrls";

export class AxiosService implements IAxiosService {
  private static instance: AxiosService;
  private readonly baseUrl = API_URLS.laravel;

  public static getInstance(): AxiosService {
    if (!AxiosService.instance) {
      AxiosService.instance = new AxiosService();
    }
    return AxiosService.instance;
  }

  async login(data: TLogin): Promise<any> {
    try {
      console.log("AxiosService login data:", data);
      const response = await axios.post<any>(this.baseUrl + "login", data);

      if (response.status !== 200) {
        throw new Error(
          `Invalid credentials or server error at ${this.baseUrl + "login"}`
        );
      }

      return response.data;
    } catch (error) {
      throw new Error(
        `Invalid credentials or server error login`
      );
    }
  }

  async register(data: TLogin): Promise<any> {
    const response = await axios.post<any>(this.baseUrl + "register", data);
    if (response.status !== 201) {
      throw new Error(`Error posting data to ${this.baseUrl + "register"}`);
    }
    return response.data;
  }
}
