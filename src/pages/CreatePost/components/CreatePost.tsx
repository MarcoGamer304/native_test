import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useCreatePost } from "../hooks/useCreatePost";
import { styles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

const AVATAR_URL =
  "https://i.pinimg.com/736x/40/47/af/4047af856340397b1e80849815f528a4.jpg";

const CreatePost: React.FC = () => {
  const {
    postText,
    setPostText,
    image,
    takePicture,
    pickImage,
    handleSubmit,
  } = useCreatePost();

  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: "#fff" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 24}
      >

        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="close" size={28} color="#222" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.publishBtn} onPress={handleSubmit}>
            <Text style={styles.publishBtnText}>Publicar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputRow}>
          <Image source={{ uri: AVATAR_URL }} style={styles.avatar} />
          <TextInput
            style={styles.input}
            multiline
            placeholder="¿Qué está pasando?"
            placeholderTextColor="#657786"
            value={postText}
            maxLength={255}
            onChangeText={setPostText}
          />
        </View>

        {image && (
          <View style={{ alignItems: "center", marginVertical: 10, marginHorizontal: 10 }}>
            <Image
              source={{ uri: image }}
              style={{ width: 400, height: 400, borderRadius: 10 }}
              resizeMode="cover"
            />
          </View>
        )}

        <View style={styles.flexSpacer} />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 24}
        >
          <View style={styles.actionBar}>
            <TouchableOpacity onPress={pickImage}>
              <Icon name="image-outline" size={26} color="#e63946" />
            </TouchableOpacity>
            <TouchableOpacity onPress={takePicture}>
              <Icon name="camera-outline" size={26} color="#e63946" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default CreatePost;

