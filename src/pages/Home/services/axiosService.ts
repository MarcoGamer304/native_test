import axios from "axios";
import { TEndpointPost } from "../models/types/TEndpointPost";
import { IAxiosService } from "../models/interfaces/IAxiosService";
import { TPost } from "../models/types/TPost";
import { API_URLS } from "../../../components/essential/apiUrls";

export class AxiosService implements IAxiosService {
  private static instance: AxiosService;
  private readonly baseUrl = API_URLS.laravel;

  public static getInstance(): AxiosService {
    if (!AxiosService.instance) {
      AxiosService.instance = new AxiosService();
    }
    return AxiosService.instance;
  }

  async getAll(url: string): Promise<TEndpointPost[]> {
    try {
    
      const response = await axios.get<TEndpointPost[]>(this.baseUrl + url);

      if (response.status !== 200) {
        throw new Error(`Error fetching data from ${url}`);
      }
     
      return response.data;
    } catch (error) {
      
      throw new Error(`Error fetching data from ${url}: ${error}`);
    }
  }

  async getByUser(url: string): Promise<TEndpointPost[]> {
    const response = await axios.get<TEndpointPost[]>(this.baseUrl + url);
    if (response.status !== 200) {
      throw new Error(`Error fetching data from ${url}`);
    }
    return response.data;
  }

  async save(url: string, data: TPost): Promise<TEndpointPost> {
    const response = await axios.post<TEndpointPost>(this.baseUrl + url, data);
    if (response.status !== 201) {
      throw new Error(`Error posting data to ${url}`);
    }
    return response.data;
  }

  async put(url: string, data: TPost): Promise<TEndpointPost> {
    const response = await axios.put<TEndpointPost>(this.baseUrl + url, data);
    if (response.status !== 200) {
      throw new Error(`Error putting data to ${url}`);
    }
    return response.data;
  }

  async delete(url: string): Promise<TEndpointPost> {
    const response = await axios.delete<TEndpointPost>(this.baseUrl + url);
    if (response.status !== 200) {
      throw new Error(`Error deleting data from ${url}`);
    }
    return response.data;
  }
}
