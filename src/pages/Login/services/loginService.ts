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
      name: "marco",
      token: "marco",
    };
    if(data.email !== "test" || data.password !== "test"){
      throw new Error("Credentials error");
    }
    return await user;
  }
}
