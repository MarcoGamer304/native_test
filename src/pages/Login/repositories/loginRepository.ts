import { ILogin } from "../models/interfaces/ILogin";
import { TEndpointLogin } from "../models/types/TEndpointLogin";
import { TLogin } from "../models/types/TLogin";
import { LoginService } from "../services/loginService";

export class LoginRepository implements ILogin {
  private static instance: LoginRepository;
  private loginService = LoginService.getInstance();

  public static getInstance(): LoginRepository {
    if (!LoginRepository.instance) {
      LoginRepository.instance = new LoginRepository();
    }
    return LoginRepository.instance;
  }

  async save(data: TLogin): Promise<TEndpointLogin> {
    const response = await this.loginService.save(data);
    if (!response) {
      throw new Error("Error al obtener el usuario");
    }
    return await response;
  }
}
