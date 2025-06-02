import AsyncStorage from "@react-native-async-storage/async-storage";

export const guardarIdUsuario = async (id: number) => {
  try {
    await AsyncStorage.setItem("userId", id.toString());
    console.log("id saved");
  } catch (e) {
    console.error("error at save id: ", e);
  }
};

export const saveToken = async (token: string) => {
  try {
    await AsyncStorage.setItem("token", token);
    console.log("token saved");
  } catch (e) {
    console.error("error at save token: ", e);
  }
};

export const getToken = async (): Promise<string> => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token === null) {
      throw new Error("token not found");
    }
    return token;
  } catch (e) {
    throw new Error("error getting token " + (e as Error).message);
  }
};

export const obtenerIdUsuario = async (): Promise<number> => {
  try {
    const id = await AsyncStorage.getItem("userId");
    if (id === null) {
      throw new Error("id not found");
    }
    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId)) {
      throw new Error("id is not a number valid");
    }
    return parsedId;
  } catch (e) {
    throw new Error("error getting id " + (e as Error).message);
  }
};
export const eliminarIdUsuario = async () => {
  try {
    await AsyncStorage.removeItem("userId");
    console.log("id deleted successfully");
  } catch (e) {
    console.error("error at delete id: ", e);
  }
};
