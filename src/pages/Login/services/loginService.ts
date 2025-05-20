import { guardarIdUsuario } from "../../../utilities/AsyncStorage";
import { ILogin } from "../models/interfaces/ILogin";
import { TEndpointLogin } from "../models/types/TEndpointLogin";
import { TLogin } from "../models/types/TLogin";

export class LoginService implements ILogin {
  private static instance: LoginService;

  static getInstance(): LoginService {
    if (!LoginService.instance) {
      LoginService.instance = new LoginService();
    }
    return LoginService.instance;
  }

  async save(data: TLogin): Promise<TEndpointLogin> {
    const user: TEndpointLogin = {
      id: 2,
      name: "marco@gmail.com",
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
