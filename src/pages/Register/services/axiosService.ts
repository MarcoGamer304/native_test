import axios from "axios";
import { IAxiosService } from "../models/interfaces/IAxiosService";
import { TRegister } from "../models/types/TRegister";
import { API_URLS } from "../../../essential/apiUrls";
import { TEndpointRegister } from "../models/types/TEndpointRegister";

export class AxiosService implements IAxiosService {
  private static instance: AxiosService;
  private readonly baseUrl = API_URLS.laravel;

  public static getInstance(): AxiosService {
    if (!AxiosService.instance) {
      AxiosService.instance = new AxiosService();
    }
    return AxiosService.instance;
  }

  async save(data: TRegister): Promise<TEndpointRegister> {
    try {
      console.log("AxiosService register data:", data);
      const response = await axios.post<any>(this.baseUrl + "register", data);

      if (response.status !== 201) {
        throw new Error(
          `Invalid credentials or server error at ${this.baseUrl + "register"}`
        );
      }

      return response.data;
    } catch (error) {
      throw new Error(`Invalid credentials or server error register${error}`);
    }
  }
}
