import { useState } from "react";
import { RegisterRepository } from "../repositories/registerRepository";
import { PostRegisterUseCase } from "../models/useCases/postRegisterUseCase";
import { createAddapterRegister } from "../adapters/createAddapterRegister";
import { TRegister } from "../models/types/TRegister";
import {
  validateAge,
  validateBirthday,
  validateEmail,
  checkInput,
} from "../utils/validator";

const useRegister = () => {
  const [user, setUser] = useState<TRegister | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const registerRepository = RegisterRepository.getInstance();
  const postRegisterUseCase = new PostRegisterUseCase(registerRepository);

  const requestUser = async (data: TRegister) => {
    try {
      checkInput(data.email, data.password, data.age, data.birthday, data.name);
      setLoading(true);
      validateEmail(data.email);
      validateAge(data.age);
      validateBirthday(data.birthday);
      console.log(data);
      const result = await postRegisterUseCase.execute(data);
      const formatted: TRegister = createAddapterRegister(result);
      setUser(formatted);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { requestUser, user, loading, error, refresh: requestUser };
};

export default useRegister;
