import { View, TextInput, StyleSheet } from 'react-native';

const CreatePostScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Write your post"
        placeholderTextColor="#657786"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  input: {
    fontSize: 16,
    color: '#14171A',
    textAlignVertical: 'top',
    minHeight: 100,
  },
});

export default CreatePostScreen;
