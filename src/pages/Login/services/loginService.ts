import { guardarIdUsuario, saveToken } from "../../../utilities/AsyncStorage";
import { ILogin } from "../models/interfaces/ILogin";
import { TEndpointLogin } from "../models/types/TEndpointLogin";
import { TLogin } from "../models/types/TLogin";
import { AxiosService } from "./axiosService";
export class LoginService implements ILogin {
  private static instance: LoginService;
  private readonly axiosService = AxiosService.getInstance();
  static getInstance(): LoginService {
    if (!LoginService.instance) {
      LoginService.instance = new LoginService();
    }
    return LoginService.instance;
  }

  async login(data: TLogin): Promise<TEndpointLogin> {
    try {
      const result = await this.axiosService.login(data);
      guardarIdUsuario(result.id);
      saveToken(result.token);
      return result;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async register(data: TLogin): Promise<TEndpointLogin> {
    const user: TEndpointLogin = {
      id: 2,
      username: "marco@gmail.com",
      token: "marco",
    };

    if (data.password === "marco") {
      guardarIdUsuario(1);
    } else {
      guardarIdUsuario(2);
    }

    return await user;
  }
}
