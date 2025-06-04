// hooks/useCreatePost.ts
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import { useNavigation } from "@react-navigation/native";
import { obtenerIdUsuario } from "../../../utilities/AsyncStorage";
import { CreatePostService } from "../services/CreatePostService";

export const useCreatePost = () => {
  const [postText, setPostText] = useState("");
  const [image, setImage] = useState<string>();
  const navigation = useNavigation();

  const takePicture = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Se necesita permiso para usar la cámara");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    if (result.assets?.length) {
      setImage(result.assets[0].uri);
    }
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Se necesita permiso para acceder a la galería");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    if (result.assets?.length) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    if (!postText.trim()) {
      alert("Wrote a message");
      return;
    }

    const userId = await obtenerIdUsuario();

    const formData = new FormData();
    formData.append("user_id", userId.toString());
    formData.append("message", postText);
    formData.append(
      "avatar",
      `https://randomuser.me/api/portraits/men/${userId}.jpg`
    );

    if (image) {
      const compressedImage = await ImageManipulator.manipulateAsync(
        image,
        [],
        {
          compress: 0.5,
          format: ImageManipulator.SaveFormat.WEBP,
        }
      );

      formData.append("image", {
        uri: compressedImage.uri,
        name: "photo.webp",
        type: "image/webp",
      } as any);
    }

    const response = await CreatePostService.getInstance().create(formData);

    if (response.id) {
      alert("Publicación creada con éxito");
      setPostText("");
      setImage(undefined);
      navigation.goBack();
    } else {
      alert("Error al crear la publicación.");
      console.error(response);
    }
  };

  return {
    postText,
    setPostText,
    image,
    takePicture,
    pickImage,
    handleSubmit,
  };
};
