import { View, TextInput, StyleSheet, TouchableOpacity, Text, KeyboardAvoidingView, Platform, Image } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const AVATAR_URL = 'https://i.pinimg.com/736x/40/47/af/4047af856340397b1e80849815f528a4.jpg';

const CreatePostScreen: React.FC = () => {
  const [postText, setPostText] = useState('');

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#fff' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 24}
    >
      {/*Header*/}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="close" size={28} color="#222" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.publishBtn}>
          <Text style={styles.publishBtnText}>Publicar</Text>
        </TouchableOpacity>
      </View>
      {/*Avatar*/}
      <View style={styles.inputRow}>
        <Image source={{ uri: AVATAR_URL }} style={styles.avatar} />
        <TextInput
          style={styles.input}
          multiline
          placeholder="¿Qué está pasando?"
          placeholderTextColor="#657786"
          value={postText}
          onChangeText={setPostText}
        />
      </View>
      {/*Barra de acciones*/}
      <View style={styles.flexSpacer} />
      <View style={styles.actionBar}>
        <TouchableOpacity>
          <Icon name="image-outline" size={26} color="#e63946" />
        </TouchableOpacity>
        {}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 8,
    borderBottomWidth: 0.5,
    borderColor: '#e6ecf0',
  },
  publishBtn: {
    backgroundColor: '#e63946',
    paddingHorizontal: 18,
    paddingVertical: 7,
    borderRadius: 20,
  },
  publishBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 17,
    color: '#14171A',
    minHeight: 40,
    paddingTop: 5,
  },
  flexSpacer: {
    flex: 1,
  },
  actionBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopWidth: 0.5,
    borderColor: '#e6ecf0',
    backgroundColor: '#fff',
  },
});

export default CreatePostScreen;
