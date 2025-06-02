import { TLogin } from "../types/TLogin";

export interface IAxiosService{
  login: (data: TLogin) => Promise<any>;
  register: (data: TLogin) => Promise<any>;
}
