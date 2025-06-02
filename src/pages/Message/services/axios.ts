import axios from "axios";

export default class AxiosService {
  private static instance: AxiosService;
  private url = "http://192.168.100.191:3000/api/teams";

  private axiosInstance = axios.create({
    baseURL: this.url,
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
  });

  static getInstance(): AxiosService {
    if (!AxiosService.instance) {
      AxiosService.instance = new AxiosService();
    }
    return AxiosService.instance;
  }

  get = async (url: string) => {
    return this.axiosInstance
      .get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error("Error in GET request:", error);
        throw error;
      });
  };

  async post(url: string, data: any) {
    return this.axiosInstance
      .post(url, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error("Error in POST request:", error);
        throw error;
      });
  }
}
