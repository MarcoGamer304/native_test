import { IRegister } from "../models/interfaces/IRegister";
import { TEndpointRegister } from "../models/types/TEndpointRegister";
import { TRegister } from "../models/types/TRegister";

export class RegisterService implements IRegister {
  private static instance: RegisterService;

  static getInstance(): RegisterService {
    if (!RegisterService.instance) {
      RegisterService.instance = new RegisterService();
    }
    return RegisterService.instance;
  }

  async save(data: TRegister): Promise<TEndpointRegister> {
    const user: TEndpointRegister = {
      name: "marco",
      email: "marco@correo.com",
      password: "asdkaf",
      age: 18,
      birthday: "asd",
    };
    return await user;
  }
}
