import { IRegister } from "../models/interfaces/IRegister";
import { TEndpointRegister } from "../models/types/TEndpointRegister";
import { TRegister } from "../models/types/TRegister";
import { AxiosService } from "./axiosService";

export class RegisterService implements IRegister {
  private static instance: RegisterService;
  private readonly axiosService = AxiosService.getInstance();

  static getInstance(): RegisterService {
    if (!RegisterService.instance) {
      RegisterService.instance = new RegisterService();
    }
    return RegisterService.instance;
  }

  async save(data: TRegister): Promise<TEndpointRegister> {
    try {
      const result = await this.axiosService.save(data);
      return result;
    } catch (error) {
      throw new Error("cant register user at this moment"+error);
    }
  }
}
