import { useState } from "react";
import { RegisterRepository } from "../repositories/registerRepository";
import { PostRegisterUseCase } from "../models/useCases/postRegisterUseCase";
import { createAddapterRegister } from "../adapters/createAddapterRegister";
import { TRegister } from "../models/types/TRegister";
import { validateEmail, checkInput, checkPassword } from "../utils/validator";

const useRegister = () => {
  const [user, setUser] = useState<TRegister | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [last_name, setLast_name] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");

  const registerRepository = RegisterRepository.getInstance();
  const postRegisterUseCase = new PostRegisterUseCase(registerRepository);

  const requestUser = async (data: TRegister) => {
    try {
      checkInput(
        data.email,
        data.password,
        data.username,
        data.last_name,
        data.name,
        data.password_confirmation
      );
      checkPassword(password, password_confirmation);
      setLoading(true);
      validateEmail(data.email);
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

  return {
    requestUser,
    user,
    loading,
    error,
    refresh: requestUser,
    setEmail,
    setLast_name,
    setName,
    setUsername,
    setPassword,
    setPassword_confirmation,
    email,
    password,
    username,
    last_name,
    name,
    password_confirmation,
  };
};

export default useRegister;
